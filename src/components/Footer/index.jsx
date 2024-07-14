/* logotipo*/
import styles from './Footer.module.css'
import logo from '../../assets/logo-alura.png'

export function Footer(){
    return(
        <footer className={styles.footer}>
            <img src={logo} alt="logo aluraflix" />
        </footer>
    )
}
