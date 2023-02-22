import styles from "@/styles/components/PrimaryGoalInput.module.scss"
import { useState } from "react"

export default function PrimaryGoalInput({ id }) {
	const [primaryGoal, setPrimaryGoal] = useState("")

	const defaultPlaceholder = "Today, I want to..."

	return (
		<form>
			<input
				id={id}
				name="primaryGoal"
				value={primaryGoal}
				className={styles.input}
				placeholder={defaultPlaceholder}
				onChange={(e) => setPrimaryGoal(e.target.value)}
				onFocus={(e) => (e.target.placeholder = "")}
				onBlur={(e) => (e.target.placeholder = defaultPlaceholder)}
				autoFocus
				autoComplete="off"
			/>
		</form>
	)
}
