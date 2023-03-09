import Layout from '@/components/Layout'
import PrimaryGoalInput from '@/components/PrimaryGoalInput'
import styles from '@/styles/Dashboard.module.scss'
import connectMongo from '@database/connectMongo'
import Task from '@database/model/tasks'
import { useFormik } from 'formik'
import Head from 'next/head'
import { useId, useState } from 'react'
import { BiPlus } from 'react-icons/bi'

export default function Dashboard({ tasks }) {
	const goalInputId = useId()
	const [missions, setMissions] = useState([])

	// Form handler
	const formik = useFormik({
		initialValues: {
			description: '',
			completed: false,
		},
		onSubmit,
	})

	// Add todo to list
	function addMission(description) {
		setMissions([...missions, { id: missions.length + 1, description }])
	}

	// Form submit
	async function onSubmit(values) {
		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(values),
		}

		await fetch('http://localhost:3000/api/tasks/addTask', options).then(
			(res) => res.json
		),
			addMission(values.description)
	}

	return (
		<Layout visible>
			<Head>
				<title>Habi</title>
				<meta name="description" content="Gamified To-do List with Goal Tracking" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<div className={styles.center}>
					<section className={styles.form}>
						<label className={styles.question} htmlFor={goalInputId}>
							What is the number one thing you want to get done today?
						</label>
						<PrimaryGoalInput id={goalInputId} />

						<form onSubmit={formik.handleSubmit}>
							<div className={styles.input_group}>
								<input
									className={styles.input}
									type="text"
									name="description"
									placeholder="New Task"
									autoComplete="off"
									{...formik.getFieldProps('description')}
								/>
								<button className={styles.button} type="submit">
									<span>
										<BiPlus size={21} />
									</span>
								</button>
							</div>
						</form>
					</section>
				</div>
				<section>
					{tasks.map((task) => (
						<p key={task.id}>{task.description}</p>
					))}
					{missions.map((mission) => (
						<p key={mission.id}>{mission.description}</p>
					))}
				</section>
			</main>
		</Layout>
	)
}

export async function getServerSideProps() {
	try {
		await connectMongo()

		const tasks = await Task.find()

		return {
			props: {
				tasks: JSON.parse(JSON.stringify(tasks)),
			},
		}
	} catch (e) {
		console.error(e)
	}
}
