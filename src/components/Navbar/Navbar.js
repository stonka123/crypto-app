import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import Searchbar from '../Searchbar/Searchbar'
import NotificationsTwoToneIcon from '@mui/icons-material/NotificationsTwoTone'
import Logo from '../../assets/img/logo.png'


const Navbar = props => {
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
