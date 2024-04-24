// External
const express = require("express");
const mongoose = require("mongoose");
// Internal
const userRoutes = require("./routes/userRoutes.js");

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
	const serverCreated = "The Server Creation and Connection was Successfully";
	console.log(serverCreated);
});

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

// middleware
// Allow JSON response
app.use(express.json());

// Use the UserRoutes, and by that, implement the Controllers
// based on the request and URL
app.use(userRoutes);
