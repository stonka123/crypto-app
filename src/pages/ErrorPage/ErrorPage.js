import styles from './ErrorPage.module.css'
import LogoImg from '../../assets/img/logo.png'
const ErrorPage = () => {
	return (
		<div className={styles.container}>
			<p>Error 404</p>
			<img src={LogoImg} alt='logo' />
			<p>Cryptocurrency does not exist!</p>
		</div>
	)
}

export default ErrorPage
