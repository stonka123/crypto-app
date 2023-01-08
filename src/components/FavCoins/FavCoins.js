import React from 'react'
import styles from './FavCoins.module.css'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
const FavCoins = props => {
	return (
		<div>
			<div className={styles.container}>
				<div
					className={props.fav?.market_data?.market_cap_rank % 2 === 0 ? `${styles.heading}` : `${styles.headingOdd}`}
					key={props.fav?.market_data?.market_cap_rank}>
					<p className={styles.rank}>{props.fav?.market_data?.market_cap_rank}</p>
					<div className={styles.name}>
						<img src={props.fav?.image?.large} alt='' />
						<p className={styles['coin-name']}>{props.fav?.symbol}</p>
					</div>
					{props.fav?.market_data?.price_change_percentage_24h.toFixed(1) == 0 && (
						<p className={`${styles.gray} box`}>
							<ArrowRightIcon className={styles['arrow-right']} />
							{props.fav?.market_data?.price_change_percentage_24h.toFixed(1)}%
						</p>
					)}
					{props.fav?.market_data?.price_change_percentage_24h.toFixed(1) > 0.01 && (
						<p className={`${styles.green} box`}>
							<ArrowDropUpIcon className={styles['arrow-up']} />
							{props.fav?.market_data?.price_change_percentage_24h.toFixed(1)}%
						</p>
					)}

					{props.fav?.market_data?.price_change_percentage_24h.toFixed(1) < -0.01 && (
						<p className={`${styles.red} box`}>
							<ArrowDropDownIcon className={styles['arrow-down']} />
							{props.fav?.market_data?.price_change_percentage_24h.toFixed(1)}%
						</p>
					)}
					<p className={styles['box-price']}>{props.fav?.market_data?.current_price.usd.toFixed(2)} USD</p>
					<p className={styles.mobileHide}>{props.fav?.market_data?.total_volume.usd.toLocaleString()} $</p>
					<p className={styles.mobileHide}>{props.fav?.market_data?.market_cap.usd.toLocaleString()} $</p>
				</div>
			</div>
		</div>
	)
}

export default FavCoins
