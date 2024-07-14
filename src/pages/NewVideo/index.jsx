
import styles from './NewVideo.module.css'
import {Form} from '../../components/Form'

export function NewVideo() {

    return (
        
            <section className={styles.newvideo}>
                <div>
                    <h1>NOVO VIDEO</h1>
                    <p>Complete o formulário para criar um novo card de vídeo.</p>
                </div>
                <h3>Criar Card</h3>
                <Form/>
            </section>
        
    )
}
