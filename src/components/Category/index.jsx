import { useState } from 'react'
import styles from './Category.module.css'
import { useEffect } from 'react'



export const categorias = [
  "Front-End",
  "Back-End",
  "Data-Science"
]

// export const cores =[
//   "#FF007F",
//   "#008000",
//   "#8A2BE2"
// ]

export function filterCategoria(id) {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/niedjaraujos/aluraflix-api/videos')
    .then(response => response.json())
    .then(data =>{
      setVideos(data)
    })
  }, [])
  return videos.filter(video => video.categoria === categorias[id])
}

// export function filterCor(categoria){
//   return videos.filter(cor => cor.categoria === cores[categoria])
// }


export function Category({category, children}){
    return(
      <section className={styles.category} >
            <h2 >{category}</h2>
            <div>
             {children}
            </div>
      </section>
    )
}

// //style={{backgroundColor:cor}}  export const categorias = [
//   {category: "Front-End",
//     cor: "#FF007F"
//   },
//   {category: "Back-End",
//     cor: "#008000"
//   },
//   {category: "Data-Science",
//     cor: "#8A2BE2"
//   }
// ]  const coresCategory = (id) =>{
//   switch (id){
//     case Front-End:
//       return {backgroundColor: "#FF007F"};
//       case Front-End:
//       return {backgroundColor: "#008000"};
//       case Data-Science:
//       return {backgroundColor: "#8A2BE2"};
//       default:
//         return{};
//   }
// }
