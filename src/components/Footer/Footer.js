import React, { useState } from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import SearchIcon from '@mui/icons-material/Search'
import FavoriteIcon from '@mui/icons-material/Favorite'
import SsidChartIcon from '@mui/icons-material/SsidChart'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import BottomNavigation from '@mui/material/BottomNavigation'

const Footer = () => {
	const BottomBar = styled(BottomNavigation)({
		backgroundColor: '#19181c',
	})
	const IconBarBottom = styled(BottomNavigationAction)`
		color: gray;
		width: 100%;
		height: 100%;
		&:hover {
			color: darkgray;
		}
		&.Mui-selected {
			text-transform: uppercase;
			color: rgb(187, 252, 48);
		}
		span {
			text-transform: capitalize;
			font-size: 12px;
			margin: 2px;
		}
		svg {
			font-size: 16px;
		}
	`
	const [value, setValue] = React.useState(0)

	return (
		<div className={styles.container}>
			<Box className={styles.lol}>
				<BottomBar
					showLabels
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue)
					}}>
					<IconBarBottom component={Link} to={'/'} label='Market' icon={<SsidChartIcon />} />

					<IconBarBottom component={Link} to={'/search'} label='Search' icon={<SearchIcon />} />

					<IconBarBottom component={Link} to={'/favorites'} label='Favorites' icon={<FavoriteIcon />} />
				</BottomBar>
			</Box>
		</div>
	)
}

export default Footer
