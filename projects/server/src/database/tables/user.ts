import * as Sequelize from 'sequelize';
import type { Tag } from './tag';

export class User extends Sequelize.Model {
	public UserId!: number;
	public Name!: string;
	public Dob!: string;
	public Address!: string;
	public Description!: string;
	public CreatedAt!: string;
	public UpdatedAt!: string;

	public readonly Tag?: Tag[];
}

const TABLE_NAME = 'User';
export function DefineUserModel(database: Sequelize.Sequelize): typeof User {
	const Model = <typeof User>database.define(
		TABLE_NAME,
		{
			UserId: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true
			},
			Name: {
				type: Sequelize.STRING(1024),
				allowNull: false
			},
			Dob: {
				type: Sequelize.STRING(1024)
			},
			Address: {
				type: Sequelize.STRING(1024)
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

	return Model;
}
