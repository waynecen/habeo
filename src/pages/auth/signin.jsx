import styles from "@/styles/auth/Signin.module.scss"
import Head from "next/head"
import Link from "next/link"
import Layout from "src/components/Layout"
import Image from "next/image"
import { RiEyeCloseLine } from "react-icons/ri"

export default function SignIn() {
	return (
		<Layout visible={false}>
			<Head>
				<title>Login | Habi</title>
			</Head>

			<div className={styles.form_layout}>
				<h3 className={styles.form_header}>Sign in to your account</h3>
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
							type="password"
							name="password"
							placeholder="Password"
							autoComplete="off"
						/>
						<span>
							<RiEyeCloseLine size={21} />
						</span>
					</div>
					<div className={styles.button_group}>
						<button className={styles.button} type="submit">
							Login
						</button>
						<button className={styles.button} type="button">
							<Image
								src={"/assets/google-logo.svg"}
								alt="Google Logo"
								width="21"
								height="21"
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
