import connectMongo from 'database/connectMongo'
import { User } from 'database/model/users'
const argon2 = require('argon2')

export default async function handler(req, res) {
	connectMongo().catch(error =>
		res.json({ error: 'Failed connection to database' })
	)

	try {
		if (req.method === 'POST') {
			if (!req.body) {
				return res.status(404).json({ error: 'Missing form data' })
			}
			const { username, email, password } = req.body

			// Check if user exists
			const userExists = await User.findOne({ email })
			if (userExists) {
				return res.status(422).json({
					message:
						'An account associated with this email address has already been registered.',
				})
			}

			// Hash Password
			const hash = await argon2.hash(password, {
				type: argon2.argon2id,
				memoryCost: 2 ** 15,
				timeCost: 2,
				parallelism: 1,
			})

			// Create user
			User.create({ username, email, password: await hash })
			res.status(201).json({ message: 'User created successfully' })
		} else {
			res.status(500).json({ message: 'Invalid HTTP Method' })
		}
	} catch (err) {
		return res.status(404).json({ err: 'Failed to create user' })
	}
}
