import { useClickOutside } from '@/hooks/useClickOutside'
import NavLink from '@/ui/link/NavLink'
import { INavLink } from '@/ui/link/NavLink.inteface'
import { FC } from 'react'
import Menu from './Menu'
import styles from './Menu.module.scss'

const Portfolio: FC<INavLink> = props => {
	const { ref, isShow, setIsShow } = useClickOutside(false)

	return (
		<div
			ref={ref}
			className={styles.container}
			onMouseEnter={() => setIsShow(true)}
		>
			<NavLink {...{ ...props }} />

			{isShow ? <Menu onMouseLeave={() => setIsShow(false)} /> : null}
		</div>
	)
}

export default Portfolio
