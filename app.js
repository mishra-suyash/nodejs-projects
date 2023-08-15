const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handle')

//middleware
app.use(express.static('./public'));
app.use(express.json());

// routes

app.use('/api/v1/tasks', tasks);

app.use(notFound);
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI;

const start = async () => {
	try {
		await connectDB(mongoURI);
		app.listen(
			port,
			console.log(`Database connected and server is listening on port ${port}`)
		);
	} catch (error) {
		console.log(error);
	}
};

start();
