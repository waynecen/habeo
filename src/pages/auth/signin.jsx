import styles from "@/styles/auth/Signin.module.scss"
import Head from "next/head"
import Link from "next/link"
import Layout from "src/components/Layout"
import Image from "next/image"
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri"
import { useState } from "react"
import { signIn } from "next-auth/react"
import { useFormik } from "formik"
import loginValidate from "@lib/form-validation"

export default function SignIn() {
	// Password Visibility
	const [visible, setVisible] = useState(false)

	const errorBorderColor = "#cc2727"

	// Form Handler
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validateOnBlur: false,
		validate: loginValidate,
		onSubmit,
	})

	async function onSubmit(values) {
		console.log(values)
	}

	// Google Sign In
	async function handleGoogleSignIn() {
		signIn("google", { callbackUrl: "http://localhost:3000" })
	}

	return (
		<Layout visible={false}>
			<Head>
				<title>Login | Habi</title>
			</Head>

			<div className={styles.form_layout}>
				<h3 className={styles.form_header}>Sign in to your account</h3>
				<form onSubmit={formik.handleSubmit}>
					<div className={styles.input_group}>
						<input
							className={styles.input}
							type="text"
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
							placeholder="Password"
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
							Login
						</button>
						<button
							className={styles.button}
							type="button"
							onClick={handleGoogleSignIn}
						>
							<Image
								src={"/assets/google-logo.svg"}
								alt="Google Logo"
								width="21"
								height="21"
								className={styles.logo_google}
							/>
							Sign in with Google
						</button>
					</div>
				</form>

				<p className={styles.signup_text}>
					Don&apos;t have an account?
					<Link href="/auth/register" className={styles.signup_link}>
						&nbsp;Sign Up
					</Link>
				</p>
			</div>
		</Layout>
	)
}
