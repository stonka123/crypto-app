import React from 'react'
import styles from './Navbar.module.css'
import { FaCoins } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<Link to='/' className={styles.link}>
			<div className={styles.container}>
				<h1>
					Coin<span>check</span>
				</h1>
				<FaCoins className={styles.icon} />
			</div>
		</Link>
	)
}

export default Navbar
