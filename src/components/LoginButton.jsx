import { useSession, signIn, signOut } from "next-auth/react"
import styles from "@/styles/LoginButton.module.scss"

export default function Component() {
	const { data: session } = useSession()
	if (session) {
		return (
			<>
				Signed in as {session.user.email} <br />
				<button onClick={() => signOut()}>Sign out</button>
			</>
		)
	}
	return (
		<>
			<button className={styles.login} onClick={() => signIn()}>
				Login
			</button>
		</>
	)
}
