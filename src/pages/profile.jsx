import { useSession, signOut } from "next-auth/react"

export default function profile() {
	const { data: session, status } = useSession()
	if (session) {
		return (
			<>
				<div>Welcome {session.user.name}</div>
				<button onClick={() => signOut()}>Sign Out</button>
			</>
		)
	} else {
		return <div>account</div>
	}
}
