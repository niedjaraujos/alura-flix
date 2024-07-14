import styles from './Form.module.css'
import { categorias } from '../Category'
import { useState } from 'react'

export function Form() {

    // const [imagem, setImagem] = useState('')
    const [url, setUrl] = useState('')
    const [categoria, setCategoria] = useState('')
    const [videos, setVideos] = useState([])
    const [errors, setErrors] = useState('')

    // validar url usando regex
    function validarUrl(url) {
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/
        if (!regex.test(url) || url.length < 43) {
            setErrors('Url inválida')
            return false
        }
        else {
            return url.substring(32, 43)
        }}


    function aoSalvar(e) {
        e.preventDefault()
        console.log(url, categoria)

        //validar form

        if (!categoria || categoria === "-") {
            setErrors('Escolha uma categoria')
            return
        } else {
            setErrors('')
        }

        const urlVideo = validarUrl(url)
        if (urlVideo && categoria) {
            const novoVideo = { url, categoria } // guardar o link do video adicionado
            setVideos([...videos, novoVideo])
            localStorage.setItem('videos', JSON.stringify([...videos, novoVideo]))

            // limpar form apos adicionar os dados
            setUrl('')
            setCategoria('')
        }
        else {
            setErrors('Url inválida')
        }}

    // botao limpar formulario
    function limpar() {
        return (
            setUrl(''),
            setCategoria('')
        )}

    return (
        <section className={styles.form}>
            
            <form onSubmit={aoSalvar} className={styles.editcard}  >
                {errors}
                <div className={styles.editar}>
                    <label>Video</label>
                    <input type="text"
                        placeholder="Adicione a url video"
                        required="required"
                        value={url}
                        onChange={e => setUrl(e.target.value)} />
                </div>
                <div className={styles.list}>
                    <label>Categoria</label>
                    <select className={styles.selecao}
                        required="required"
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}>
                        <option value="-">Selecione a categoria</option>
                        {categorias.map(item => <option key={item}>{item}</option>)}
                    </select>
                </div>
                <div className={styles.editbutton}>
                    <button>Salvar</button>
                    <button type="reset" onClick={limpar}>Limpar</button>
                </div>
            </form>
        </section>
    )
}

