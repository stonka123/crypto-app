import React from 'react'
import Coin from '../../pages/Coin/Coin'
import styles from './Coins.module.css'
import { Link } from 'react-router-dom'
import CoinItem from '../CoinItem/CoinItem'
import SelectBar from '../SelectBar/SelectBar'

const Coins = props => {
	return (
		<div className={styles.container}>
			<SelectBar />
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
