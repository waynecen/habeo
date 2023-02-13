import NextAuth from "next-auth"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "@lib/utils/mongodb"
import DiscordProvider from "next-auth/providers/discord"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
	adapter: MongoDBAdapter(clientPromise),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		DiscordProvider({
			clientId: process.env.DISCORD_CLIENT_ID,
			clientSecret: process.env.DISCORD_CLIENT_SECRET,
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)
