import HalfCapsule from '@/ui/shapes/HalfCapsule'
import { FC } from 'react'
import styles from './Hero.module.scss'
import HeroImage from './right/HeroImage'
const Hero: FC = () => {
	return (
		<div className={styles.container}>
			{/* <HalfCapsule /> */}
			<HeroImage />
		</div>
	)
}

export default Hero
