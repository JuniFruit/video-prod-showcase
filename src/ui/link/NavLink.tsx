import React, { FC } from 'react'
import Link from 'next/link'
import { INavLink } from './NavLink.inteface'
import styles from './Link.module.scss'
import { useRouter } from 'next/router'

const NavLink: FC<INavLink> = ({ to, text }) => {
	const router = useRouter()
	return (
		<Link
			href={to}
			className={`${styles.nav_link} ${
				to === router.asPath ? styles.nav_active : ''
			}`}
		>
			{text}
		</Link>
	)
}

export default NavLink
