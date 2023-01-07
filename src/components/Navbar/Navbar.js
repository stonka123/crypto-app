import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import { FaCoins } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { styled, alpha } from '@mui/material/styles'
import Searchbar from '../Searchbar/Searchbar'
import { style } from '@mui/system'
import NotificationsTwoToneIcon from '@mui/icons-material/NotificationsTwoTone'
import Logo from '../../assets/img/logo.png'

import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch, { SwitchProps } from '@mui/material/Switch'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const Navbar = props => {
	const AntSwitch = styled(Switch)(({ theme }) => ({
		width: 28,
		height: 16,
		padding: 0,
		display: 'flex',
		'&:active': {
			'& .MuiSwitch-thumb': {
				width: 15,
			},
			'& .MuiSwitch-switchBase.Mui-checked': {
				transform: 'translateX(9px)',
			},
		},
		'& .MuiSwitch-switchBase': {
			padding: 2,
			'&.Mui-checked': {
				transform: 'translateX(12px)',
				color: '#fff',
				'& + .MuiSwitch-track': {
					opacity: 1,
					backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
				},
			},
		},
		'& .MuiSwitch-thumb': {
			boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
			width: 12,
			height: 12,
			borderRadius: 6,
			transition: theme.transitions.create(['width'], {
				duration: 200,
			}),
		},
		'& .MuiSwitch-track': {
			borderRadius: 16 / 2,
			opacity: 1,
			backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
			boxSizing: 'border-box',
		},
	}))

	return (
		<div className={styles.container}>
			<div className={styles.logoBox}>
				<div className={styles.logo}>
					<h1>CryptoChecker</h1>
					<img src={Logo} className={styles.img} />
				</div>
				<NotificationsTwoToneIcon className={styles.iconNoti} />
			</div>
			<Link to='/' className={styles.link}>
				<Searchbar onSearch={props.onSearch} />
			</Link>
		</div>
	)
}

export default Navbar
