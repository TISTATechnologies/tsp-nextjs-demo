import * as Sequelize from 'sequelize';
import { User } from './user';

export class Tag extends Sequelize.Model {
	public TagId!: number;
	public UserId!: number;
	public Description!: string;
	public CreatedAt!: string;
	public UpdatedAt!: string;
}

const TABLE_NAME = 'Tag';
export function DefineTagModel(database: Sequelize.Sequelize, UserFactory: typeof User): typeof Tag {
	const Model = <typeof Tag>database.define(
		TABLE_NAME,
		{
			TagId: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true
			},
			UserId: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			Description: {
				type: Sequelize.STRING(1024)
			}
		},
		{
			createdAt: 'CreatedAt',
			updatedAt: 'UpdatedAt'
		}
	);

	UserFactory.hasMany(Model, {
		foreignKey: 'UserId', // Key on Model
		sourceKey: 'UserId' // Key on UserFactory
	});

	return Model;
}
