import { FC, useRef, WheelEventHandler } from 'react'
import { skills } from './skill.data'
import styles from './Skills.module.scss'

const SkillsFloating: FC = () => {
	const containerRef = useRef<number[]>([])
	const vals: number[] = []

	const scroll: WheelEventHandler<HTMLDivElement> = e => {
		const { deltaY } = e
		const angle = 360 / 6
		let rot = 0
		Array.from((e.target as HTMLDivElement).childNodes).forEach((node, ind) => {
			const currEl = node as Element
			const currPos = window.getComputedStyle(currEl)['transform']
			console.log(vals)
			const computedAngle = (vals[ind] || angle) + (ind + 1) * 1
			vals[ind] = computedAngle
			rot += computedAngle
			let values = currPos.split('(')[1].split(')')[0].split(',')
			let a = values[0]
			console.log(values)
			let prevRot = Math.round(Math.asin(+a) * (180 / Math.PI))
			// console.log(angle)
			;(currEl as any).style.transform = `rotate(${
				rot * 1
			}deg) translate(${5}rem) rotate(${rot * -1}deg)`
		})
	}

	return (
		<div onClick={scroll} className={styles.skills_container}>
			{skills.map(skill => (
				<span key={skill.title} className={styles.icon}>
					{skill.icon({})}
				</span>
			))}
		</div>
	)
}

export default SkillsFloating
