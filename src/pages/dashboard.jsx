import Layout from 'components/Layout'
import MissionList from 'components/MissionList'
import connectMongo from 'database/connectMongo'
import { Task, User } from 'database/model/users'
import Head from 'next/head'
import styles from 'styles/pages/Dashboard.module.scss'
import { authOptions } from './api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'

export default function Dashboard({ data }) {
	return (
		<Layout visible>
			<Head>
				<title>Dashboard | Habi</title>
				<meta
					name="description"
					content="Productivity app with roleplay elements"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<MissionList data={data}></MissionList>
			</main>
		</Layout>
	)
}

export async function getServerSideProps(context) {
	const session = await getServerSession(context.req, context.res, authOptions)

	await connectMongo()

	const authorId = await User.findOne({
		email: { $eq: session.user.email },
	}).select('_id')

	const data = await Task.find({ author: { $eq: authorId } })
	return {
		props: {
			data: JSON.parse(JSON.stringify(data)),
		},
	}
}
