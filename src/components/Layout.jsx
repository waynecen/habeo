import styles from "@/styles/components/Layout.module.scss"
import LoginButton from "@/components/LoginButton"
import Link from "next/link"

export default function Layout({ children, visible }) {
	return (
		<div className={styles.layout_wrapper}>
			<div className={styles.nav}>
				<Link href="/" className={styles.logo}>
					Habi
				</Link>
				{visible && <LoginButton />}
			</div>

			<div className={styles.children_layout}>{children}</div>
		</div>
	)
}
