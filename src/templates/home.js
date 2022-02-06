import Contato from '../components/contato'
import HeroImageLeft from '../components/heroImageLeft'
import HeroImageRight from '../components/heroImageRight'
import Base from './base'


const Home = () => {
    return (
        <>
            <Base>
                <HeroImageRight title={"Quem eu sou"} description=" Snippy is a rich coding snippets app that lets you create your own
                        code snippets, categorize them, and even sync them in the cloud so
                        you can use them anywhere. All that is free!" urlImg={'img/hero_programming.svg'}></HeroImageRight>
                <HeroImageLeft title={"Skills"} description=" Snippy is a rich coding snippets app that lets you create your own
                        code snippets, categorize them, and even sync them in the cloud so
                        you can use them anywhere. All that is free!" urlImg={'img/skills.svg'}></HeroImageLeft>
                <Contato></Contato>
            </Base>
        </>
    )
}

export default Home