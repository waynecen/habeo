import clientPromise from "@lib/utils/mongodb"

export default async function topTwentyMovies(req, res) {
	try {
		const client = await clientPromise
		const db = client.db("sample_mflix")

		const movies = await db
			.collection("movies")
			.find({})
			.sort({ metacritic: -1 })
			.limit(10)
			.toArray()

		res.json(movies)
	} catch (e) {
		console.error(e)
		throw new Error(e).message
	}
}
