import clientPromise from "lib/mongodb"

export default function postGoal(req, res) => {
	try {
		const client = await clientPromise;
		const db = client.db("goals");

		const { title, content } = req.body;

		const post = await db.collection("goals").insertOne({
			title,
			content,
		})

		res.json(post);
	} catch (e) {
		console.error(e)
		throw new Error(e).message
	}
}
