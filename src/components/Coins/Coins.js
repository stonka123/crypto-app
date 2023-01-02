import React from 'react'
import Coin from '../../pages/Coin/Coin'
import styles from './Coins.module.css'
import { Link } from 'react-router-dom'
import CoinItem from '../CoinItem/CoinItem'

const Coins = props => {
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
			<div className={styles.test}>
				{props.coins.map(coin => {
					return (
						<Link className={styles.link} to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
							<CoinItem coin={coin} />
						</Link>
					)
				})}
			</div>
		</div>
	)
}

export default Coins
