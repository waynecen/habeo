import { useSession, signIn, signOut } from "next-auth/react"
import styles from "@/styles/components/LoginButton.module.scss"

export default function LoginButton() {
	const { data: session } = useSession()
	if (session) {
		return (
			<>
				{session.user.name} <br />
				<button className={styles.button} onClick={() => signOut()}>
					Sign out
				</button>
			</>
		)
	}
	return (
		<>
			<button className={styles.button} onClick={() => signIn()}>
				Login
			</button>
		</>
	)
}
