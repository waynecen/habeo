import connectMongo from 'database/connectMongo'
import { Task } from 'database/model/users'

export default async function handler(req, res) {
	await connectMongo().catch(err =>
		res.json({ err: 'Failed connection to database' })
	)

	try {
		if (req.method === 'DELETE') {
			if (!req.body) {
				return res.status(404).json({ error: 'Missing data' })
			}

			const idToDelete = req.body
			await Task.findById(idToDelete).deleteOne()
			res.status(204).end()
		} else {
			res.status(400).json({ message: 'Invalid HTTP Method' })
		}
	} catch (err) {
		console.log(err)
		return res.status(404).json({ err: 'Failed to delete task' })
	}
}
