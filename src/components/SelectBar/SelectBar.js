import React from 'react'
import styles from './SelectBar.module.css'
const SelectBar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.heading}>
				<p className={styles.rank}>#</p>
				<p className={styles.name}>Token</p>
				<p className={styles['box-price']}>Price</p>
				<p className={styles.box}>24h</p>
				<p className={styles.mobileHide}>Volume</p>
				<p className={styles.mobileHide}>Market Cap</p>
			</div>
			<div className={styles.test}></div>
		</div>
	)
}

export default SelectBar
