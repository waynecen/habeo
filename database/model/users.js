import { Schema, models, model } from 'mongoose'

const userSchema = Schema({
	username: String,
	email: String,
	password: String,
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

const taskSchema = Schema({
	description: String,
	difficulty: [],
	completed: Boolean,
	author: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
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

const User = models.User || model('User', userSchema)
const Task = models.Task || model('Task', taskSchema)

export { User, Task }
