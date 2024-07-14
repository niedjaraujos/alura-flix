import styles from './Banner.module.css'
import banner from './player.png'

export function Banner(){
    return(
       <div className={styles.banner}>
        <img src={banner} alt="" />
       </div>
    )
}