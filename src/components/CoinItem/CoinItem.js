import React from 'react'
import styles from './CoinItem.module.css'

const CoinItem = props => {
	return (
		<div className={styles.container}>
			<div className={styles.heading}>
				<p className={styles.rank}>#{props.coin.market_cap_rank}</p>
				<div className={styles.name}>
					<img src={props.coin.image} alt='' />
					<p>{props.coin.name}</p>
				</div>
				<p>{props.coin.current_price} $</p>
				<p>{props.coin.price_change_percentage_24h} </p>
				<p className={styles.mobileHide}>{props.coin.total_volume} $</p>
				<p className={styles.mobileHide}>{props.coin.market_cap} $</p>
			</div>
		</div>
	)
}

export default CoinItem
