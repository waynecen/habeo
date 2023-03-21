import Layout from 'components/Layout'
import Head from 'next/head'
import styles from 'styles/Home.module.scss'

export default function Home() {
	return (
		<Layout visible>
			<Head>
				<title>Habi</title>
				<meta
					name="description"
					content="Productivity app with roleplay elements"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<div className={styles.center}>Marketing Page Goes Here</div>
			</main>
		</Layout>
	)
}
