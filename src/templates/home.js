import Experience from '../components/Experience'
import Hero from '../components/Hero'
import Base from './base'


const Home = () => {
    return (
        <>
            <Base>
                <Hero subtitle={'Programador. Experiência de mais de 3 anos. Apaixonado por tecnologia e inovação. '}></Hero>
                <Experience></Experience>
            </Base>

        </>
    )
}

export default Home