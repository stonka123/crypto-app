
import Coin from '../../pages/Coin/Coin'
import styles from './Coins.module.css'
import { Link } from 'react-router-dom'
import CoinItem from '../CoinItem/CoinItem'

import CircularProgress from '@mui/material/CircularProgress'

const Coins = props => {
	const sort24h = () => {
		props.sortHandler24h()
	}
	const sortTokenName = () => {
		props.sortHandlerToken()
	}
	const sortRank = () => {
		props.sortHandlerRank()
	}
	const sortPrice = () => {
		props.sortHandlerPrice()
	}

	return (
		<div className={styles.container}>
			<div className={styles.heading}>
				<p className={styles.rank} onClick={sortRank}>
					#
				</p>
				<p className={styles.name} onClick={sortTokenName}>
					Token
				</p>
				<p className={styles.box} onClick={sort24h}>
					24h
				</p>
				<p className={styles['box-price']} onClick={sortPrice}>
					Price
				</p>
				<p className={styles.mobileHide}>Volume</p>
				<p className={styles.mobileHide}>Market Cap</p>
			</div>

			{props.loading ? (
				<div className={styles.test}>
					<CircularProgress
						sx={{
							color: '#bbfc30',
						}}
					/>
				</div>
			) : null}
			<div className={styles.lol}>
				{props.coins
					.filter(val => {
						if (props.term == '') {
							return val
						} else if (
							val.name.toLowerCase().includes(props.term.toLowerCase()) ||
							val.symbol.toLowerCase().includes(props.term.toLowerCase()) ||
							val.id.toLowerCase().includes(props.term.toLowerCase())
						) {
							return val
						}
					})

					.map(coin => {
						return (
							<Link
								className={styles.link}
								to={`/coin/${coin.id}`}
								element={<Coin konFav={props.konkFav} />}
								key={coin.id}>
								<CoinItem coin={coin} />
							</Link>
						)
					})}
			</div>
		</div>
	)
}

export default Coins
