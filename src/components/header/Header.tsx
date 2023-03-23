import NavLink from '@/ui/link/NavLink'
import { Logo } from '@/ui/logo/Logo'
import { FC } from 'react'
import styles from './Header.module.scss'
import { links } from './links.data'
import Portfolio from './menu/Portfolio'

const Header: FC = () => {
	return (
		<header className={styles.container}>
			<Logo />
			<div className={styles.link_container}>
				<ul>
					{links.map(item => {
						if (item.link === '/portfolio')
							return (
								<Portfolio to={item.link} key={item.link} text={item.title} />
							)
						return (
							<li key={item.title}>
								<NavLink
									text={item.title}
									to={item.link}
									key={item.link + item.title}
								/>
							</li>
						)
					})}
				</ul>
			</div>
		</header>
	)
}

export default Header
