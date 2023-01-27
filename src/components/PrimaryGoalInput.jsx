import styles from "@/styles/PrimaryGoalInput.module.scss"
import { useState } from "react"

export default function PrimaryGoalInput({ id }) {
	const [primaryGoal, setPrimaryGoal] = useState("")

	return (
		<form>
			<input
				id={id}
				name="primaryGoal"
				value={primaryGoal}
				className={styles.input}
				placeholder="Today, I want to..."
				onChange={(e) => setPrimaryGoal(e.target.value)}
				onFocus={(e) => (e.target.placeholder = "")}
				onBlur={(e) => (e.target.placeholder = primaryGoal)}
				autoFocus
			/>
		</form>
	)
}
