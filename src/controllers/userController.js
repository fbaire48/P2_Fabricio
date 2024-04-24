const usersCollection = require("../models/userModel.js");

exports.getAllUsers = async (req, res) => {
	try {
		const allUsers = await usersCollection.find();
		res.status(200).json(allUsers);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.createUser = async (req, res) => {
	try {
		const newUser = await usersCollection.create(req.body);
		res.status(200).json(newUser);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.updateUser = async (req, res) => {
	try {
		const { userId } = req.params;
		const foundUser = await usersCollection.findByIdAndUpdate(
			userId,
			req.body
		);
		if (!foundUser) {
			// pass
			// It will be handle by the catch error
		} else {
			const updatedUser = await usersCollection.findById(userId);
			res.status(200).json(updatedUser);
		}
	} catch (error) {
		res.status(404).json({ message: "User Not Found" });
	}
};

exports.deleteUser = async (req, res) => {
	try {
		const { userId } = req.params;
		const foundUser = await usersCollection.findByIdAndDelete(userId);
		if (!foundUser) {
			// pass
			// It will be handle by the catch error
		} else {
			const deletedUser = foundUser;
			res.status(200).json(deletedUser);
		}
	} catch (error) {
		res.status(404).json({ message: "User Not Found" });
	}
};
