import Layout from 'components/Layout'
import Head from 'next/head'
import styles from 'styles/pages/Dashboard.module.scss'
import HabiGraph from 'components/HabiGraph'

export default function Insights() {
	return (
		<Layout visible>
			<Head>
				<title>Insights | Habi</title>
			</Head>
			<main className={styles.main}>
				<HabiGraph />
			</main>
		</Layout>
	)
}
