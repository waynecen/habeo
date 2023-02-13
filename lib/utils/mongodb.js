import { MongoClient } from "mongodb"

if (!process.env.MONGODB_URI) {
	throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const URI = process.env.MONGODB_URI
const options = {}

let client
let clientPromise

if (process.env.NODE_ENV !== "production") {
	if (!global._mongoClientPromise) {
		client = new MongoClient(URI, options)
		global._mongoClientPromise = client.connect()
	}
	clientPromise = global._mongoClientPromise
} else {
	client = new MongoClient(URI, options)
	clientPromise = client.connect()
}

export default clientPromise
