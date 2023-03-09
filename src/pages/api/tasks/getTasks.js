import connectMongo from '@database/connectMongo'
import Task from '@database/model/tasks'

export default async function getTasks(req, res) {
	await connectMongo().catch((err) =>
		res.json({ err: 'Failed connection to database' })
	)

	try {
		// Only accept GET request
		if (req.method === 'GET') {
			const task = await Task.find().populate('_id')
			res.json(task)
		} else {
			res.status(500).json({ message: 'Invalid HTTP Method' })
		}
	} catch (err) {
		return res.status(404).json({ err: 'Failed to fetch tasks' })
	}
}
