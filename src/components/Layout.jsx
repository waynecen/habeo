import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import styles from 'styles/components/Layout.module.scss'
import NavBar from 'components/NavBar'
import Head from 'next/head'

export default function Layout({ children, visible }) {
	const { data: session } = useSession()

	return (
		<>
			<Head>
				<meta
					name="description"
					content="Productivity app with roleplay elements"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.wrapper}>
				<nav className={styles.nav}>
					<Link href="/" className={styles.logo}>
						Habi
					</Link>
					{session ? (
						visible ? (
							<button onClick={() => signOut()} className={styles.button}>
								Sign Out
							</button>
						) : (
							<></>
						)
					) : visible ? (
						<button onClick={() => signIn()} className={styles.button}>
							Sign In
						</button>
					) : (
						<></>
					)}
				</nav>
				<div className={styles.children_layout}>{children}</div>
				<NavBar />
			</div>
		</>
	)
}
