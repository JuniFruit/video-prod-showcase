import { posCircle } from '@/utils/math'
import {
	FC,
	useEffect,
	MouseEventHandler,
	useRef,
	WheelEventHandler
} from 'react'
import { skills } from './skill.data'
import styles from './Skills.module.scss'

const SkillsFloating: FC = () => {
	const containerRef = useRef<HTMLDivElement>(null)
	const playState = useRef<'running' | 'paused'>('running')
	const prevAngle = useRef<number>(0)

	const togglePlayState: MouseEventHandler<HTMLDivElement> = e => {
		if (!containerRef.current) return
		const container = containerRef.current
		playState.current = playState.current === 'paused' ? 'running' : 'paused'
		container.style.animationPlayState = playState.current
		let items = container.childNodes
		items.forEach(item => {
			;(item as HTMLElement).style.animationPlayState = playState.current
		})
	}

	const toggleRadius = (isEntering: boolean) => {
		if (!containerRef.current) return
		posCircle(containerRef.current, 0, isEntering ? 150 : 100)
	}

	useEffect(() => {
		if (containerRef.current) {
			posCircle(containerRef.current)
		}
	}, [])

	const scroll: WheelEventHandler<HTMLDivElement> = e => {
		const direction = e.deltaY < 0 ? -1 : 1
		let angle = prevAngle.current
		prevAngle.current += 0.05 * direction

		posCircle(e.target as Element, angle, direction < 0 ? 100 : 150)
	}

	return (
		<div
			onWheel={scroll}
			onClick={togglePlayState}
			onMouseEnter={() => toggleRadius(true)}
			onMouseLeave={() => toggleRadius(false)}
			ref={containerRef}
			className={styles.skills_container}
		>
			{skills.map(skill => (
				<span
					key={skill.title}
					className={styles.icon}
					onMouseEnter={togglePlayState}
					onMouseLeave={togglePlayState}
				>
					{skill.icon({})}
				</span>
			))}
		</div>
	)
}

export default SkillsFloating
