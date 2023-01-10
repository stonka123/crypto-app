import React, { useState } from 'react'

import { styled, alpha } from '@mui/material/styles'

import InputBase from '@mui/material/InputBase'

import SearchIcon from '@mui/icons-material/Search'

const Searchbar = props => {
	const Search = styled('div')(({ theme }) => ({
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		color: 'gray',
		width: '100%',
		'&:hover': {
			backgroundColor: alpha(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',

		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
			margin: '0 auto',
		},
	}))

	const SearchIconWrapper = styled('div')(({ theme }) => ({
		padding: theme.spacing(0, 1),
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
				width: '100%',
				// border: '1px solid rgba(187, 252, 48,0.5)',
				// boxShadow: '0px 0px 0px 3px rgba(187, 252, 48, 0.1)',
				// borderRadius: '4px',
			},
			[theme.breakpoints.up('sm')]: {
				width: '12ch',
				'&:focus': {
					width: '100%',
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
				width: { sm: '60%', md: '60%' },
				'& .MuiInputBase-root': {
					height: 35,
					width: '100%',
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
