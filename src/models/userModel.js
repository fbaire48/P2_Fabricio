const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: String,
	email: String,
});

// Create, if not exists, and connect to the "users" collection
const usersCollection = mongoose.model("User", userSchema);

module.exports = usersCollection;
