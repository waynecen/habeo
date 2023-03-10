import styles from '@/styles/components/Layout.module.scss'
import Link from 'next/link'
import { useSession, signOut, signIn } from 'next-auth/react'

export default function Layout({ children, visible }) {
	const { data: session } = useSession()

	return (
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
		</div>
	)
}
