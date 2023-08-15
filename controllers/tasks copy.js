const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
	try {
		const tasks = await Task.find({});
		res.status(200).json({ success: true, data: tasks });
	} catch (error) {
		res.status(500).json({ success: false, error: error.errors.name.message });
	}
};

const createTask = async (req, res) => {
	try {
		const task = await Task.create(req.body);
		res.status(201).json({ success: true, data: task });
	} catch (error) {
		res.status(500).json({ success: false, error: error.errors.name.message });
	}
};
const getTask = async (req, res) => {
	try {
		const { id: taskID } = req.params;
		const task = await Task.findOne({
			_id: taskID,
		});
		if (!task) {
			return res
				.status(404)
				.json({ success: false, data: `No Task with ID = ${taskID}` });
		}
		res.status(200).json({ success: true, data: task });
	} catch (error) {
		res.status(500).json({ success: false, error: error.errors.name.message });
	}
};
const updateTask = async (req, res) => {
	try {
		const { id: taskID } = req.params;
		const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
			new: true,
			runValidators: true,
		});
		if (!task) {
			return res
				.status(404)
				.json({ success: false, data: `No Task with ID = ${taskID}` });
		}
		res.status(200).json({ success: true, data: task });
	} catch (error) {
		res.status(500).json({ success: false, error: error.errors.name.message });
	}
};
const deleteTask = async (req, res) => {
	try {
		const { id: taskID } = req.params;
		const task = await Task.findOneAndDelete({ _id: taskID });
		if (!task) {
			return res
				.status(404)
				.json({ success: false, data: `No Task with ID = ${taskID}` });
		}
		res.status(200).json({ success: true, data: task });
	} catch (error) {
		res.status(500).json({ success: false, error: error.errors.name.message });
	}
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
