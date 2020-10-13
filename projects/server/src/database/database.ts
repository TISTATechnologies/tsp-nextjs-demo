import { Sequelize } from 'sequelize';
import { User, DefineUserModel } from './tables/user';
import { Tag, DefineTagModel } from './tables/tag';

export class Database {
	private db: Sequelize;

	public User: typeof User;
	public Tag: typeof Tag;

	constructor(sqlite: string) {
		this.db = new Sequelize({
			dialect: 'sqlite',
			storage: sqlite
		});

		this.User = DefineUserModel(this.db);
		this.Tag = DefineTagModel(this.db, this.User);

		this.User.sync({ force: false });
		this.Tag.sync({ force: false });
	}

	public async queryUsersPage(pageStart: number, pageSize: number, filter: string) {}
}
