import styles from "./Modal.module.css"
import fechar from '../../assets/fechar.png'




export const Modal = ({ children, isOpen, setIsOpen}) =>{
    if (!isOpen) return null;
        return (
            <div className={styles.modal} >
            
                <div className={styles.cardform}>
                <h3>Editar Card</h3>

                   {children}

                   <button onClick={() => {setIsOpen(false)}}  
                   className={styles.close}>
                    <img src={fechar} alt="fechar"/> </button>
                </div>
            </div>
        )
    }






