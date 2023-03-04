import clientPromise from '@lib/mongodb'
import Users from '@database/model/userSchema'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import connectMongo from '@database/connectMongo'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
const argon2 = require('argon2')

export const authOptions = {
	adapter: MongoDBAdapter(clientPromise),
	pages: {
		signIn: '/auth/signin',
	},
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			async authorize(credentials, req) {
				connectMongo().catch((error) => {
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

				return user
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
