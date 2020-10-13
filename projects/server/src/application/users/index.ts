import { Router } from 'express';
import bodyParser from 'body-parser';
import { Request, Response, NextFunction } from 'express';
import { Database } from '../../database/database';
import { Op } from 'sequelize';
import { mapKeysToLower } from '../../utils/map-keys-to-lower';

export function usersApi(database: Database) {
	const { User, Tag } = database;

	const app = Router();

	app.use(bodyParser.json());
	app.options('/users', async (req: Request, res: Response) => {
		res.status(200);
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
		res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST');
		res.send();
	});
	app.get('/users', async (req: Request, res: Response, next: NextFunction) => {
		res.setHeader('Access-Control-Allow-Origin', '*');
		next();
	});
	app.get('/users', async (req: Request, res: Response) => {
		const { pageStart, pageSize, filter } = req.query;
		if (!pageSize || !pageStart) {
			res.sendStatus(400);
			return;
		}

		const users = await User.findAll({
			where: {
				UserId: {
					[Op.gte]: parseInt(pageStart as string)
				}
			},
			limit: parseInt(pageSize as string),
			include: [Tag]
		});

		res.status(200);
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify(users.map((user) => mapKeysToLower(user.toJSON()))));
	});

	app.post('/users', async (req: Request, res: Response, next: NextFunction) => {
		res.setHeader('Access-Control-Allow-Origin', '*');
		next();
	});
	app.post('/users', async (req: Request, res: Response) => {
		const { name, dob, address, description } = req.body;
		if (!name) {
			res.sendStatus(400);
			return;
		}

		const [user, isNew] = await User.upsert({
			Name: name,
			DOB: dob,
			Address: address,
			Description: description
		});

		res.sendStatus(204);
	});
	return app;
}
