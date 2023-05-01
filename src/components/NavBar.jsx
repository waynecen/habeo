import Link from 'next/link'
import { BiBarChartSquare, BiGame, BiMenu, BiNews } from 'react-icons/bi'
import styles from 'styles/components/NavBar.module.scss'

export default function NavBar() {
	return (
		<nav className={styles.wrapper}>
			<Link href="/">
				<span
					data-text="Profile"
					className={`${styles.icon_dashboard} ${styles.tooltip}`}
				>
					<BiGame size={22} aria-label="profile" />
				</span>
			</Link>
			<Link href="/dashboard">
				<span
					data-text="Dashboard"
					className={`${styles.icon_dashboard} ${styles.tooltip}`}
				>
					<BiNews size={22} aria-label="dashboard" />
				</span>
			</Link>
			<Link href="/insights">
				<span
					data-text="Insights"
					className={`${styles.tooltip} ${styles.icon_insights}`}
				>
					<BiBarChartSquare size={22} aria-label="insights" />
				</span>
			</Link>
			<Link href="/">
				<span
					data-text="Settings"
					className={`${styles.tooltip} ${styles.icon_insights}`}
				>
					<BiMenu size={22} aria-label="settings" />
				</span>
			</Link>
		</nav>
	)
}
