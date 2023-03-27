import connectMongo from 'database/connectMongo'
import Task from 'database/model/tasks'

export default async function handler(req, res) {
	await connectMongo().catch(err =>
		res.json({ err: 'Failed connection to database' })
	)

	try {
		if (req.method === 'PATCH') {
			if (!req.body) {
				return res.status(404).json({ error: 'Missing data' })
			}

			const { id, description } = req.body

			const task = await Task.findByIdAndUpdate(id, { description: description })
			res.json(task)
		} else {
			res.status(500).json({ message: 'Invalid HTTP Method' })
		}
	} catch (err) {
		return res.status(404).json({ err: 'Failed to update task' })
	}
}
