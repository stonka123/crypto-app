import React, { useContext, useState } from 'react'
import styles from './Favorites.module.css'

import Coin from '../Coin/Coin'
import FavCoins from '../../components/FavCoins/FavCoins'
import { Link } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'

const Favorites = props => {
	return (
		<div className={styles.container}>
			<div className={styles.heading}>
				<p className={styles.delete}> Del </p>
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
					{props.favC.map((fav, index) => {
						return (
							<Link className={styles.link} to={`/coin/${fav.id}`} element={<Coin />} key={index}>
								<FavCoins fav={fav} onDelete={props.onDelete} favCo={props.favCo} />
							</Link>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Favorites
