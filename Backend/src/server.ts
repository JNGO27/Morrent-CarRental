import express from 'express';
import session from 'express-session';
import http from 'http';
import mongoose from 'mongoose';
import passport from 'passport';
import MongoStore from 'connect-mongo';
import bodyparser from 'body-parser';

import { config } from './config/config';
import passportSetup from './config/passport';
import Logging from './Library/Logging';
import carRoutes from './routes/Car';
import userRoutes from './routes/User';
import authRoutes from './routes/Auth';

const routerServer = express();

routerServer.use(bodyparser.json());
routerServer.use(bodyparser.urlencoded({ extended: true }));

routerServer.use(
	session({
		secret: 'black cat',
		resave: false,
		saveUninitialized: false,
		store: MongoStore.create({ mongoUrl: config.mongo.url })
	})
);

routerServer.use(passport.initialize());
routerServer.use(passport.session());
passportSetup();

/** Connect to Mongoose */
mongoose
	.connect(`${config.mongo.url}/car_rental_web_app`, { retryWrites: true, w: 'majority' })
	.then(() => {
		Logging.info('Connected to mongoDB.');
		StartServer();
	})
	.catch((error) => {
		Logging.error('Unable to connect: ');
		Logging.error(error);
	});

/** Only start the server if Mongoose connects */

const StartServer = () => {
	routerServer.use((req, res, next) => {
		/** Log The Request */
		Logging.info(`Incoming => Method [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

		res.on('finish', () => {
			/** Log The Response */
			Logging.info(`Incoming => Method [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`);
		});

		next();
	});

	routerServer.use(express.urlencoded({ extended: true }));
	routerServer.use(express.json());

	/** Rules of our API */
	routerServer.use((req, res, next) => {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

		if (req.method == 'OPTIONS') {
			res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
			return res.status(200).json({});
		}

		next();
	});

	/** Routes */
	routerServer.use('/cars', carRoutes);
	routerServer.use('/users', userRoutes);
	routerServer.use('/', authRoutes);

	/** API Check */
	routerServer.get('/ping', (req, res, next) => res.status(200).json({ message: 'pong' }));

	/** Error Handling */
	routerServer.use((req, res, next) => {
		const error = new Error('Not Found');
		Logging.error(error);

		return res.status(404).json({ message: error.message });
	});

	http.createServer(routerServer).listen(config.server.port, () => Logging.info(`Server is running on port ${config.server.port}.`));
};
