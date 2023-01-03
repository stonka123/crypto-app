import React, { useState } from 'react'
import styles from './Footer.module.css'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import WalletIcon from '@mui/icons-material/Wallet'
import FavoriteIcon from '@mui/icons-material/Favorite'
import SsidChartIcon from '@mui/icons-material/SsidChart'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import BottomNavigation from '@mui/material/BottomNavigation'

const Footer = () => {
	const BottomBar = styled(BottomNavigation)({
		backgroundColor: '#26242b',
	})
	const IconBarBottom = styled(BottomNavigationAction)`
		color: gray;
		margin: 1em;
		&:hover {
			color: red;
		}
		.Mui-selected {
			color: white !important;
		}
	`

	const [value, setValue] = React.useState(0)
	console.log(value)
	return (
		<div className={styles.container}>
			<Box className={styles.lol}>
				<BottomBar
					showLabels
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue)
					}}>
					<IconBarBottom label='Market' icon={<SsidChartIcon />} />
					<IconBarBottom label='Wallet' icon={<WalletIcon />} />
					<IconBarBottom label='Favorites' icon={<FavoriteIcon />} />
				</BottomBar>
			</Box>
		</div>
	)
}

export default Footer
