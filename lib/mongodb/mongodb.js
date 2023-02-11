import { MongoClient } from "mongodb"

const URI = process.env.MONGODB_URI
const options = {}

if (!URI) throw new Error("Invalid environment variable: 'MONGODB_URI'")

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
