import { Schema, models, model } from 'mongoose'

const taskSchema = new Schema({
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

const Task = models.Task || model('Task', taskSchema)

export default Task
