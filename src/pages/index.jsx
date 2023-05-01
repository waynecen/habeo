import Layout from 'components/Layout'
import Head from 'next/head'
import styles from 'styles/Home.module.scss'

export default function Home() {
	return (
		<Layout visible>
			<Head>
				<title>Habi</title>
			</Head>

			<main>
				<div className={styles.center}>Marketing Page Goes Here</div>
			</main>
		</Layout>
	)
}
