import connectMongo from 'database/connectMongo'
import Task from 'database/model/tasks'

export default async function handler(req, res) {
	await connectMongo().catch(err =>
		res.json({ err: 'Failed connection to database' })
	)

	try {
		if (req.method === 'DELETE') {
			if (!req.body) {
				return res.status(404).json({ error: 'Missing data' })
			}

			const { id } = req.body

			const task = await Task.findOneAndDelete(id)
			res.json(task)
		} else {
			res.status(500).json({ message: 'Invalid HTTP Method' })
		}
	} catch (err) {
		return res.status(404).json({ err: 'Failed to delete task' })
	}
}
