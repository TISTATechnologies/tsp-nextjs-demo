import { Router } from 'express';
import bodyParser from 'body-parser';
import { Request, Response, NextFunction } from 'express';
import { Database } from '../../database/database';
import { mapKeysToLower } from '../../utils/map-keys-to-lower';

export function tagsApi(database: Database) {
	const { Tag } = database;

	const app = Router();

	app.use(bodyParser.json());
	app.options('/tags/:id', async (req: Request, res: Response) => {
		res.status(200);
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
		res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST');
		res.send();
	});

	app.get('/tags/:id', async (req: Request, res: Response, next: NextFunction) => {
		res.setHeader('Access-Control-Allow-Origin', '*');
		next();
	});
	app.get('/tags/:id', async (req: Request, res: Response) => {
		const { id } = req.params;

		const user = await Tag.findOne({
			where: {
				TagId: parseInt(id)
			}
		});

		res.status(200);
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify(mapKeysToLower(user.toJSON())));
	});

	return app;
}
