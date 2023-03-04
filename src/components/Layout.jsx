import styles from '@/styles/components/Layout.module.scss'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

export default function Layout({ children, visible }) {
	const { data: session } = useSession()

	return (
		<div className={styles.layout_wrapper}>
			<div className={styles.nav}>
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
					<Link href={'/auth/signin'} className={styles.button}>
						Login
					</Link>
				) : (
					<></>
				)}
			</div>

			<div className={styles.children_layout}>{children}</div>
		</div>
	)
}
