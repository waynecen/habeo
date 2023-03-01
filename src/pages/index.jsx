import Layout from "@/components/Layout"
import PrimaryGoalInput from "@/components/PrimaryGoalInput"
import styles from "@/styles/Home.module.scss"
import Head from "next/head"
import { useId } from "react"
import { useSession } from "next-auth/react"

export default function Home() {
	const goalInputId = useId()

	const { data: session } = useSession()

	return (
		<Layout visible>
			<Head>
				<title>Habi</title>
				<meta name="description" content="Gamified To-do List with Goal Tracking" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{session ? User({ session }) : Guest()}
		</Layout>
	)
}

function User({ session }) {
	const goalInputId = useId()
	return (
		<main>
			<div className={styles.center}>
				<section className={styles.form}>
					<label className={styles.question} htmlFor={goalInputId}>
						What is the number one thing you want to get done today,{" "}
						{session.user.name}?
					</label>
					<PrimaryGoalInput id={goalInputId} />
				</section>
			</div>
		</main>
	)
}

function Guest() {
	const goalInputId = useId()
	return (
		<main>
			<div className={styles.center}>
				<section className={styles.form}>
					<label className={styles.question} htmlFor={goalInputId}>
						What is the number one thing you want to get done today?
					</label>
					<PrimaryGoalInput id={goalInputId} />
				</section>
			</div>
		</main>
	)
}
