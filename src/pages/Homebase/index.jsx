
import { Container } from '../../components/Container'
import {Banner} from '../../components/Banner'
import {Card} from '../../components/Card'
import { categorias, Category, filterCategoria } from '../../components/Category'


export function Homebase() {
    return (
        <>
            <Banner />
            <Container >
              {categorias.map((category, index) =>
                    <Category category={category} >
                        {filterCategoria(index).map((video) => 
                        <Card id={video.id}
                        cor={video.cor}
                        key={video.id} />)}
                    </Category>
              )}
            </Container>
        </>
    )
}
