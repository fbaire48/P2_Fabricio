// External
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
// Internal
const userRoutes = require("./routes/userRoutes.js");
const usersCollection = require("./models/userModel.js");

const app = express();
const PORT = 3000;

// middleware
// Allow JSON response
app.use(express.json());

// Views Identifier
app.use(express.static(path.join(__dirname, "views")));

// Form Body Accesser
app.use(bodyParser.urlencoded({ extended: true }));

// Use the UserRoutes, and by that, implement the Controllers
// based on the request and URL
app.use(userRoutes);

app.post("/", async (req, res) => {
	const userEmail = req.body.email;
	const userPassword = req.body.password;

	try {
		const foundUser = await usersCollection.findOne({ email: userEmail });
		if (!foundUser) {
			res.status(500).json({
				message: "User Not Found, can't redirect to the FLASK SERVER",
			});
		} else {
			serverFlask = `http://127.0.0.1:5000/`;
			res.redirect(serverFlask);
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// LOGAR COM:
// email: coldermester@gmail.com
// senha: 123

app.listen(PORT, () => {
	const serverCreated = `The Server Creation and Connection was Successfully at the Port: ${PORT}`;
	console.log(serverCreated);

	// DB Connection
	mongoConnectionString =
		"mongodb+srv://admin:123@aws.hiafwad.mongodb.net/?retryWrites=true&w=majority&appName=AWS";

	mongoose
		.connect(mongoConnectionString, { dbName: "ExpressJS" })
		.then(() => {
			const onfulfiled = "Successfully Connected to MongoDB";
			console.log(onfulfiled);
		})
		.catch((error) => {
			const onrejected = "Failed to Connect to MongoDB\nCatched Error:\n";
			console.log(onrejected);
			console.log(error);
		});
});
