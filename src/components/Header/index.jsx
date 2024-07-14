

import styles from './Header.module.css'
import logo from '../../assets/logo-alura.png'
import { Link } from 'react-router-dom'
import {NavLink} from '../NavLink'

export function Header() {
    return (
        <header className={styles.header}>
           <Link to="./">
                <img src={logo} alt="logo aluraflix" />
           </Link>
            <nav>
                <NavLink url="./">
                Principal
                </NavLink>
                <NavLink url="./NewVideo">
                Novo Video
                </NavLink>
            </nav>
        </header>

    )
}
