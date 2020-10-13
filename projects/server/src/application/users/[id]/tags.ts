import { Router } from 'express';
import bodyParser from 'body-parser';
import { Request, Response, NextFunction } from 'express';
import { Database } from '../../../database/database';
import { mapKeysToLower } from '../../../utils/map-keys-to-lower';

export function userTagsApi(database: Database) {
	const { User, Tag } = database;

	const app = Router();

	app.use(bodyParser.json());
	app.options('/users/:id/tags', async (req: Request, res: Response) => {
		res.status(200);
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
		res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST');
		res.send();
	});
	app.get('/users/:id/tags', async (req: Request, res: Response, next: NextFunction) => {
		res.setHeader('Access-Control-Allow-Origin', '*');
		next();
	});
	app.get('/users/:id/tags', async (req: Request, res: Response) => {
		const { id } = req.params;

		const tags = await Tag.findAll({
			where: {
				UserId: parseInt(id)
			}
		});

		res.status(200);
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify(tags.map((tag) => mapKeysToLower(tag.toJSON()))));
	});

	app.post('/users/:id/tags', async (req: Request, res: Response, next: NextFunction) => {
		res.setHeader('Access-Control-Allow-Origin', '*');
		next();
	});
	app.post('/users/:id/tags', async (req: Request, res: Response) => {
		const { id } = req.params;
		const { description } = req.body;
		if (!description) {
			res.sendStatus(400);
			return;
		}

		const [tag, isNew] = await Tag.upsert({
			UserId: id,
			Description: description
		});

		res.sendStatus(204);
	});
	return app;
}
