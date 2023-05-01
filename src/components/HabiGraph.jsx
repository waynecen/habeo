import styles from 'styles/components/HabiGraph.module.scss'
import { v4 as uuidv4 } from 'uuid'

export default function HabiGraph() {
	let week = []
	let year = []

	function createGrid(days, weeks) {
		for (let i = 0; i < days; i++) {
			week.push(i)
		}

		for (let j = 0; j < weeks; j++) {
			year.push(week)
		}

		return year
	}
	createGrid(7, 52)

	const column = week.map(day => {
		return <div className={styles.day} key={uuidv4()}></div>
	})

	const graph = year.map(week => {
		return (
			<div className={styles.week} key={uuidv4()}>
				{column}
			</div>
		)
	})

	return (
		<section className={styles.wrapper}>
			<g className={styles.month_labels}>
				<text>May</text>
				<text>June</text>
				<text>July</text>
				<text>Aug</text>
				<text>Sept</text>
				<text>Oct</text>
				<text>Nov</text>
				<text>Dec</text>
				<text>Jan</text>
				<text>Feb</text>
				<text>Mar</text>
				<text>Apr</text>
			</g>
			<div className={styles.container}>{graph}</div>
		</section>
	)
}
