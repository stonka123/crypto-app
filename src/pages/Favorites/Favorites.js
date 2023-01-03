import React from 'react'
import styles from './Favorites.module.css'
import CoinItem from '../../components/CoinItem/CoinItem'
import Coin from '../Coin/Coin'
import { Link } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'

const Favorites = props => {
	console.log(props.coins)
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

			{props.loading ? (
				<div className={styles.test}>
					<CircularProgress
						sx={{
							color: '#bbfc30',
						}}
					/>
				</div>
			) : null}

			<div className='lol'>
				<div>
					{props.coins.map(coin => {
						return (
							<Link className={styles.link} to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
								<CoinItem coin={coin} />
							</Link>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Favorites
