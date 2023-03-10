import Head from 'next/head'
import Layout from '@/components/Layout'
import styles from '@/styles/Dashboard.module.scss'
import connectMongo from '@database/connectMongo'
import Task from '@database/model/tasks'
import { useFormik } from 'formik'
import { useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import { MdEdit } from 'react-icons/md'

export default function Dashboard({ tasks }) {
	const [missions, setMissions] = useState([])

	// Form handler
	const formik = useFormik({
		initialValues: {
			description: '',
			completed: false,
		},
		onSubmit,
	})

	// Add mission to end of list
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
				<title>Dashboard | Habi</title>
				<meta
					name="description"
					content="Productivity app with roleplay elements"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<section className={styles.form}>
					<form onSubmit={formik.handleSubmit}>
						<div className={styles.input_group}>
							<input
								className={styles.input}
								type="text"
								name="description"
								placeholder="New mission"
								autoComplete="off"
								{...formik.getFieldProps('description')}
							/>
							<button className={styles.button} type="submit">
								<span>
									<BiPlus size={20} />
								</span>
							</button>
						</div>
					</form>
				</section>

				<section className={styles.missionList}>
					{/* Populate missions from server  */}
					<h4 className={styles.header}>Mission List</h4>
					{tasks.map((task) => (
						<div key={task._id} className={styles.mission}>
							<p className={styles.details}>{task.description}</p>
							<span className={styles.edit_icon}>
								<MdEdit size={20} />
							</span>
						</div>
					))}

					{/* Client-side rendering */}
					{missions.map((mission) => (
						<div key={mission.id} className={styles.mission}>
							<p className={styles.details}>{mission.description}</p>
							<span className={styles.edit_icon}>
								<MdEdit size={20} />
							</span>
						</div>
					))}
				</section>
			</main>
		</Layout>
	)
}

// Fetch user missions from database
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
