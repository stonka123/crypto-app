import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Coins from './components/Coins/Coins'
import Navbar from './components/Navbar/Navbar'
import Coin from './pages/Coin/Coin'
import axios from 'axios'
import Footer from './components/Footer/Footer'
import './mui.css'
import Search from './pages/Search/Search'
import Favorites from './pages/Favorites/Favorites'

function App() {
	const [coins, setCoins] = useState([])
	const [loading, setLoading] = useState(true)
	const [searchTerm, setSearchTerm] = useState('')

	const url =
		'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

	useEffect(() => {
		axios
			.get(url)
			.then(res => {
				setCoins(res.data)
				setLoading(false)
			})
			.catch(err => {
				console.log(err)
			})
	}, [])

	function searchHandler(term) {
		setSearchTerm(term)
	}

	return (
		<div className='dashboard'>
			<Router>
				<Navbar
					onSearch={term => {
						searchHandler(term)
					}}
				/>
				<Routes>
					<Route path='/coin' element={<Coin />}>
						<Route path=':coinId' element={<Coin />} />
					</Route>
					<Route path='/' element={<Coins term={searchTerm} coins={coins} loading={loading} />} />
					<Route
						path='/search'
						element={<Search coins={coins} loading={loading} onSearch={term => searchHandler(term)} />}
					/>
					<Route path='/favorites' element={<Favorites coins={coins} loading={loading} />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	)
}

export default App
