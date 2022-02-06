import { Container } from '@chakra-ui/react'
import Menu from '../components/navbar'

const Base = ({ children }) => {
    return (
        <>
            <Menu></Menu>
            <Container centerContent maxW='container.xl'>
                {children}
            </Container>
        </>
    )
}

export default Base

