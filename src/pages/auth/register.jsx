import Layout from "@/components/Layout"
import styles from "@/styles/auth/Register.module.scss"
import Head from "next/head"
import Link from "next/link"
import { useState } from "react"
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri"

export default function Register() {
	const [visible, setVisible] = useState(false)

	return (
		<Layout>
			<Head>
				<title>Register | Habi</title>
			</Head>

			<div className={styles.form_layout}>
				<h3 className={styles.form_header}>Register a new Habi account</h3>
				<form>
					<div className={styles.input_group}>
						<input
							className={styles.input}
							type="text"
							name="username"
							placeholder="Username"
							autoComplete="off"
						/>
					</div>
					<div className={styles.input_group}>
						<input
							className={styles.input}
							type="email"
							name="email"
							placeholder="Email"
							autoComplete="off"
						/>
					</div>
					<div className={styles.input_group}>
						<input
							className={styles.input}
							type={`${visible ? "text" : "password"}`}
							name="password"
							placeholder="Password (min. 8 characters)"
							autoComplete="off"
						/>
						<span onClick={() => setVisible(!visible)}>
							{visible ? <RiEyeLine size={21} /> : <RiEyeCloseLine size={21} />}
						</span>
					</div>
					<div className={styles.button_group}>
						<button className={styles.button} type="submit">
							Register account
						</button>
					</div>
				</form>

				<p className={styles.signup_text}>
					Have an account?
					<Link href="/auth/signin" className={styles.signup_link}>
						&nbsp;Log In
					</Link>
				</p>
			</div>
		</Layout>
	)
}
