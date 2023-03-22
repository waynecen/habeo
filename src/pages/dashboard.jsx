import Layout from 'components/Layout'
import MissionList from 'components/MissionList'
import connectMongo from 'database/connectMongo'
import Task from 'database/model/tasks'
import Head from 'next/head'
import styles from 'styles/pages/Dashboard.module.scss'

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

export async function getServerSideProps() {
	try {
		await connectMongo()

		const data = await Task.find()

		return {
			props: {
				data: JSON.parse(JSON.stringify(data)),
			},
		}
	} catch (e) {
		console.error(e)
	}
}
