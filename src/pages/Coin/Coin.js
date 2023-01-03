import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import styles from './Coin.module.css'

const Coin = props => {
	const [coin, setCoin] = useState([])
	const params = useParams()
	const URL_COIN = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

	useEffect(() => {
		axios
			.get(URL_COIN)
			.then(res => {
				setCoin(res.data)
				console.log(res.data.id)
			})
			.catch(err => {
				console.log(err)
			})
	}, [])

	return <div className={styles.container}>{coin.name}</div>
}

export default Coin
