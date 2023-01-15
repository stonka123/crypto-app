import styles from './CoinItem.module.css'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

const CoinItem = props => {
	return (
		<div className={styles.container}>
			<div
				className={props.coin?.market_cap_rank % 2 === 0 ? `${styles.heading}` : `${styles.headingOdd}`}
				key={props.coin?.market_cap_rank}>
				<p className={styles.rank}>{props.coin?.market_cap_rank}</p>
				<div className={styles.name}>
					<img src={props.coin?.image} alt={props.coin.symbol} />
					<p className={styles['coin-name']}>{props.coin.symbol}</p>
				</div>
				{props.coin?.price_change_percentage_24h.toFixed(1) == 0 && (
					<p className={`${styles.gray} box`}>
						<ArrowRightIcon className={styles['arrow-right']} /> {props.coin?.price_change_percentage_24h.toFixed(1)}%
					</p>
				)}
				{props.coin?.price_change_percentage_24h.toFixed(1) > 0.01 && (
					<p className={`${styles.green} box`}>
						<ArrowDropUpIcon className={styles['arrow-up']} /> {props.coin?.price_change_percentage_24h.toFixed(1)}%
					</p>
				)}

				{props.coin?.price_change_percentage_24h.toFixed(1) < -0.01 && (
					<p className={`${styles.red} box`}>
						<ArrowDropDownIcon className={styles['arrow-down']} /> {props.coin?.price_change_percentage_24h.toFixed(1)}%
					</p>
				)}
				<p className={styles['box-price']}>{props.coin?.current_price.toFixed(2)} USD</p>
				<p className={styles.mobileHide}>{props.coin?.total_volume.toLocaleString()} $</p>
				<p className={styles.mobileHide}>{props.coin?.market_cap.toLocaleString()} $</p>
			</div>
		</div>
	)
}

export default CoinItem
