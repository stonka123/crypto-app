import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Coins from './components/Coins/Coins'
import Navbar from './components/Navbar/Navbar'
import Coin from './pages/Coin/Coin'
import axios from 'axios'

function App() {
	const [coins, setCoins] = useState([])

	const url =
		'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false '

	useEffect(() => {
		axios
			.get(url)
			.then(res => {
				setCoins(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}, [])

	return (
		<div>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Coins coins={coins} />} />
					<Route path='/coin' element={<Coin />}>
						<Route path=':coinId' element={<Coin />} />
					</Route>
				</Routes>
			</Router>
		</div>
	)
}

export default App
