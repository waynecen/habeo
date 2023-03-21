import connectMongo from 'database/connectMongo'
import Users from 'database/model/users'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
const argon2 = require('argon2')

export const authOptions = {
	pages: {
		signIn: '/auth/signin',
	},
	providers: [
		CredentialsProvider({
			id: 'credentials',
			name: 'Credentials',
			async authorize(credentials, req) {
				// Connect to Database
				await connectMongo().catch((error) => {
					error: 'Failed to connect to database'
				})

				// Check for existing user
				const user = await Users.findOne({ email: credentials.email })
				if (!user) {
					throw new Error('User with this email does not exist')
				}

				// Verify Password
				const verifyPassword = await argon2.verify(
					user.password,
					credentials.password
				)
				if (!verifyPassword || user.email !== credentials.email) {
					throw new Error('Username and Password do not match.')
				}

				if (user) {
					return user
				} else {
					return null
				}
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	session: {
		strategy: 'jwt',
	},
}

export default NextAuth(authOptions)
