import React from 'react'
import Coin from '../../pages/Coin/Coin'
import styles from './Coins.module.css'
import { Link } from 'react-router-dom'
import CoinItem from '../CoinItem/CoinItem'
import SelectBar from '../SelectBar/SelectBar'
import CircularProgress from '@mui/material/CircularProgress'
import FavoriteIcon from '@mui/icons-material/Favorite'

const Coins = props => {
	console.log('coiny', props.term.value)
	return (
		<div className={styles.container}>
			<div className={styles.heading}>
				<p className={styles.rank}>#</p>
				<p className={styles.name}>Token</p>
				<p className={styles.box}>24h</p>
				<p className={styles['box-price']}>Price</p>
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

export default Coins
