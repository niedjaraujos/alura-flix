
import styles from './Card.module.css'
import iconeEditar from '../../assets/editar.png'
import iconeExcluir from '../../assets/excluir.png'
import { Modal } from '../Modal'
import { useState } from 'react'
import {Form} from '../Form'




export function Card( { id, cor}) {
    const [openModal, setOpenModal] = useState (false)
    return (
<>
<Modal isOpen={openModal} setIsOpen ={setOpenModal} >
        <Form/>
    </Modal>
            <section  className={styles.card} style={{backgroundColor: cor, borderColor: cor}}> 
           <a href={`https://www.youtube.com/watch?v=${id}`}
                    target="_blank" 
                    rel="noreferrer noopener">
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="capa imagem do video"  />
                </a>
                
            <div className={styles.button}>
                <button onClick={() => {setOpenModal(true)}} ><img src={iconeEditar} alt="iconedit" />Editar</button>
                <button onClick='' ><img src={iconeExcluir}  alt="delete" />Excluir</button>
            </div>
   </section>
        
</>
    )
}



// function RemoveCard () {
//     return fetch(`https://my-json-server.typicode.com/niedjaraujos/aluraflix-api/videos/${id}`, {
//         method: "DELETE",
//         headers:{
//             "Content-Type": "application/json",
//         },
    
// })
//     .then((res) => res.json())
//     .catch((err) => console.log(err));
// };