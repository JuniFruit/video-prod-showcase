import NavLink from '@/ui/link/NavLink'
import { FC, OlHTMLAttributes } from 'react'
import { menuLinks } from './menu.data'
import styles from './Menu.module.scss'

type IMenu = OlHTMLAttributes<HTMLOListElement>

const Menu: FC<IMenu> = props => {
	return (
		<ul className={styles.dropdown} {...{ ...props }}>
			{menuLinks.map(item => (
				<li key={item.link}>
					<NavLink to={item.link} key={item.link} text={item.title} />
				</li>
			))}
		</ul>
	)
}

export default Menu
