import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import styles from './Coin.module.css'
import DOMPurify from 'dompurify'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { style } from '@mui/system'
import moment from 'moment'
const Coin = props => {
	const [coin, setCoin] = useState([])
	const params = useParams()
	const URL_COIN = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

	useEffect(() => {
		axios
			.get(URL_COIN)
			.then(res => {
				setCoin(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}, [])

	return (
		<div className={styles.container}>
			<div className={styles.coinContainer}>
				<div className={styles.contentTop}>
					<h1>{coin.name}</h1>
					<button className={styles.buttonAdd}>
						<p></p> <FavoriteIcon className={styles.iconAdd} />
					</button>
				</div>
				<div className={styles.contentBody}>
					<div className={styles.rank}>
						<span className={styles.rankBtn}>Rank # {coin.market_cap_rank}</span>
					</div>
					<div className={styles.info}>
						<div className={styles.coinHeading}>
							{coin.image ? <img className={styles.logo} src={coin.image.large} alt='symbol cryptocurrency' /> : null}

							<p className={styles.symbol}>{coin.symbol}</p>
						</div>
						<div className={styles.coinPrice}>
							{coin.market_data?.current_price ? (
								<h3>{coin.market_data.current_price.usd.toLocaleString()} USD</h3>
							) : null}
						</div>
					</div>
					<div className={styles.table}>
						<table className={styles.table}>
							<thead>
								<tr>
									<th>1h</th>
									<th>24h</th>
									<th>7d</th>
									<th>14d</th>
									<th>30d</th>
									<th>1yr</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										{coin.market_data?.price_change_percentage_1h_in_currency ? (
											<p
												className={
													coin.market_data.price_change_percentage_1h_in_currency.usd > 0
														? `${styles.green}`
														: `${styles.red}`
												}>
												{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}
											</p>
										) : null}
									</td>
									<td>
										{coin.market_data?.price_change_percentage_24h_in_currency ? (
											<p
												className={
													coin.market_data.price_change_percentage_24h_in_currency.usd > 0
														? `${styles.green}`
														: `${styles.red}`
												}>
												{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%
											</p>
										) : null}
									</td>
									<td>
										{coin.market_data?.price_change_percentage_24h_in_currency ? (
											<p
												className={
													coin.market_data.price_change_percentage_7d_in_currency.usd > 0
														? `${styles.green}`
														: `${styles.red}`
												}>
												{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%
											</p>
										) : null}
									</td>
									<td>
										{coin.market_data?.price_change_percentage_24h_in_currency ? (
											<p
												className={
													coin.market_data.price_change_percentage_14d_in_currency.usd > 0
														? `${styles.green}`
														: `${styles.red}`
												}>
												{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%
											</p>
										) : null}
									</td>
									<td>
										{coin.market_data?.price_change_percentage_24h_in_currency ? (
											<p
												className={
													coin.market_data.price_change_percentage_30d_in_currency.usd > 0
														? `${styles.green}`
														: `${styles.red}`
												}>
												{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%
											</p>
										) : null}
									</td>
									<td>
										{coin.market_data?.price_change_percentage_24h_in_currency ? (
											<p
												className={
													coin.market_data.price_change_percentage_1y_in_currency.usd > 0
														? `${styles.green}`
														: `${styles.red}`
												}>
												{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%
											</p>
										) : null}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div className={styles.contentInfo}>
				<div className={styles.stats}>
					<h4 className={styles.property}>24 Hour Low</h4>
					<div className={styles.value}>
						{coin.market_data?.low_24h ? <p>$ {coin.market_data.low_24h.usd.toFixed(2)}</p> : null}
					</div>
				</div>
				<div className={styles.stats}>
					<h4 className={styles.property}>24 Hour High</h4>

					<div className={styles.value}>
						{coin.market_data?.high_24h ? <p>$ {coin.market_data.high_24h.usd.toFixed(2)}</p> : null}
					</div>
				</div>
				<div className={styles.stats}>
					<h4 className={styles.property}>Market Cap</h4>

					<div className={styles.value}>
						{coin.market_data?.market_cap ? <p>$ {coin.market_data.market_cap.usd.toLocaleString()}</p> : null}
					</div>
				</div>
				<div className={styles.stats}>
					<h4 className={styles.property}>Total Supply</h4>
					<div className={styles.value}>
						{coin.market_data ? <p>$ {coin.market_data.circulating_supply.toLocaleString()}</p> : null}
					</div>
				</div>
				<div className={styles.stats}>
					<h4 className={styles.property}>Official site</h4>
					<div className={styles.value}>
						{coin.links ? (
							<a className={styles.homepage} href={coin.links.homepage[0]} target='_blank'>
								{coin.name}
							</a>
						) : null}
					</div>
				</div>
				<div className={styles.stats}>
					<h4 className={styles.property}>ATH</h4>
					<div className={styles.value}>
						{coin.market_data ? (
							<p>
								{moment(coin.market_data.ath_date.usd).utc().format('DD-MM-YYYY')}
								<span> &nbsp;</span>
								<span
									className={
										coin.market_data.ath_change_percentage.usd.toFixed(1) > 0 ? `${styles.green}` : `${styles.red}`
									}>
									({coin.market_data.ath_change_percentage.usd.toFixed(1)}%)
								</span>
							</p>
						) : null}
					</div>
				</div>
				<div className={styles.stats}>
					<h4 className={styles.property}>ATL</h4>
					<div className={styles.value}>
						{coin.market_data ? (
							<p>
								{moment(coin.market_data.atl_date.usd).utc().format('DD-MM-YYYY')}
								<span> &nbsp;</span>
								<span
									style={{ display: 'block' }}
									className={
										coin.market_data.atl_change_percentage.usd.toFixed(1) > 0 ? `${styles.green}` : `${styles.red}`
									}>
									({coin.market_data.atl_change_percentage.usd.toFixed(1)}%)
								</span>
							</p>
						) : null}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Coin
