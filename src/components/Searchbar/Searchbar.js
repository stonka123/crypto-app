import styles from './Searchbar.module.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import { FaSearchengin } from 'react-icons/fa'

const Searchbar = props => {
	const Search = styled('div')(({ theme }) => ({
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		color: 'gray',
		'&:hover': {
			backgroundColor: alpha(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',

		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	}))

	const SearchIconWrapper = styled('div')(({ theme }) => ({
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}))

	const StyledInputBase = styled(InputBase)(({ theme }) => ({
		color: 'inherit',
		'& .MuiInputBase-input': {
			color: 'gray',
			padding: theme.spacing(0.5, 0.5, 0.5, 0),
			// vertical padding + font size from searchIcon
			paddingLeft: `calc(1em + ${theme.spacing(4)})`,
			transition: theme.transitions.create('width'),
			width: '100%',
			'&:focus': {
				color: 'white',
			},
			[theme.breakpoints.up('sm')]: {
				width: '12ch',
				'&:focus': {
					width: '20ch',
					color: 'red',
				},
			},
		},
	}))

	const [term, setTerm] = useState('')

	const search = e => {
		props.onSearch(term)
	}
	const onKeyDownHandler = e => {
		search()
	}

	return (
		<Search
			sx={{
				width: { sm: 200, md: 300 },
				'& .MuiInputBase-root': {
					// height: 30,
				},
			}}>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
			<StyledInputBase
				value={term}
				onKeyDown={onKeyDownHandler}
				onChange={e => setTerm(e.target.value)}
				placeholder='Search…'
				autoFocus
			/>
		</Search>
	)
}

export default Searchbar
