import Layout from "@/components/Layout"
import styles from "@/styles/auth/Register.module.scss"
import Head from "next/head"
import Link from "next/link"
import { useState } from "react"
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri"
import { useFormik } from "formik"
import { registerValidate } from "@lib/form-validation"

export default function Register() {
	const [visible, setVisible] = useState(false)

	const errorBorderColor = "#cc2727"

	const formik = useFormik({
		initialValues: {
			username: "",
			email: "",
			password: "",
		},
		validate: registerValidate,
		onSubmit,
	})

	async function onSubmit(values) {
		console.log(values)
	}

	return (
		<Layout>
			<Head>
				<title>Register | Habi</title>
			</Head>

			<div className={styles.form_layout}>
				<h3 className={styles.form_header}>Register a new Habi account</h3>
				<form onSubmit={formik.handleSubmit}>
					<div className={styles.input_group}>
						<input
							className={styles.input}
							type="text"
							name="username"
							placeholder="Display Name"
							autoComplete="off"
							style={{
								borderColor:
									formik.errors.username && formik.touched.username
										? errorBorderColor
										: "",
							}}
							{...formik.getFieldProps("username")}
						/>
					</div>
					{formik.errors.username && formik.touched.username ? (
						<span className={styles.error}>{formik.errors.username}</span>
					) : (
						<></>
					)}
					<div className={styles.input_group}>
						<input
							className={styles.input}
							type="email"
							name="email"
							placeholder="Email"
							autoComplete="off"
							style={{
								borderColor:
									formik.errors.email && formik.touched.email ? errorBorderColor : "",
							}}
							{...formik.getFieldProps("email")}
						/>
					</div>
					{formik.errors.email && formik.touched.email ? (
						<span className={styles.error}>{formik.errors.email}</span>
					) : (
						<></>
					)}
					<div className={styles.input_group}>
						<input
							className={styles.input}
							type={`${visible ? "text" : "password"}`}
							name="password"
							placeholder="Password (min. 8 characters)"
							autoComplete="off"
							style={{
								borderColor:
									formik.errors.password && formik.touched.password
										? errorBorderColor
										: "",
							}}
							{...formik.getFieldProps("password")}
						/>
						<span onClick={() => setVisible(!visible)}>
							{visible ? <RiEyeLine size={21} /> : <RiEyeCloseLine size={21} />}
						</span>
					</div>
					{formik.errors.password && formik.touched.password ? (
						<span className={styles.error}>{formik.errors.password}</span>
					) : (
						<></>
					)}
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
