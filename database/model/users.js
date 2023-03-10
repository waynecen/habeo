import { Schema, model, models } from 'mongoose'

const userSchema = new Schema({
	username: String,
	email: String,
	password: String,
	tasks: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Task',
		},
	],
	createdAt: {
		type: Date,
		immutable: true,
		default: () => Date.now(),
	},
	updatedAt: {
		type: Date,
		default: () => Date.now(),
	},
})

const Users = models.user || model('user', userSchema)

export default Users
