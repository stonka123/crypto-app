import React, { useState } from 'react'
import styles from './Search.module.css'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import Searchbar from './Searchbar/Searchbar'

const Search = props => {
	return (
		<div className={styles.container}>
			<Searchbar />
		</div>
	)
}

export default Search
