# External
from datetime import datetime

import pymongo
from flask import Flask, redirect, render_template, request


app = Flask(__name__)
PORT = 5000

# DB Connection
client = pymongo.MongoClient(
    "mongodb+srv://admin:123@aws.hiafwad.mongodb.net/?retryWrites=true&w=majority&appName=AWS"
)
db = client["ExpressJS"]
collection = db["comments"]

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        comment = request.form["comment"]
        if comment:
            collection.insert_one({"text": comment, "datetime": datetime.now()})
        else:
            print("Comentário Vazio")
        # Se for uma solicitação GET, renderize o template
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True, port=5000)
