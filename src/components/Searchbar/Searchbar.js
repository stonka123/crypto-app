import React, { useState } from 'react'
import styles from './Searchbar.module.css'

const Searchbar = props => {
	const [term, setTerm] = useState('')

	const search = e => {
		props.onSearch(term)
	}
	const onKeyDownHandler = e => {
		search()
	}

	return (
		<div className={styles.container}>
			<input
				type='text'
				value={term}
				onKeyDown={onKeyDownHandler}
				onChange={e => setTerm(e.target.value)}
				placeholder='Search…'
				className={styles.input}
			/>
		</div>
	)
}

export default Searchbar
