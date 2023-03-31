import connectMongo from 'database/connectMongo'
import { Task, User } from 'database/model/users'

export default async function handler(req, res) {
	await connectMongo().catch(err =>
		res.json({ err: 'Failed connection to database' })
	)

	try {
		// Only accept POST request
		if (req.method === 'POST') {
			if (!req.body) {
				return res.status(404).json({ error: 'Missing field data' })
			}

			const authorId = await User.findOne({
				email: { $eq: req.body.email },
			}).select('_id')

			// Create new instance of task
			const task = await Task.create({ ...req.body, author: authorId })

			res.json(task)
		} else {
			res.status(500).json({ message: 'Invalid HTTP Method' })
		}
	} catch (err) {
		console.log(err)
		return res.status(404).json({ err: 'Failed to create task' })
	}
}
