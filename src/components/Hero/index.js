import {
    Box, Container, Heading, Stack, Text
} from '@chakra-ui/react';

export default function CallToActionWithAnnotation({ subtitle }) {
    return (
        <>
            <Container maxW={'4xl'}>
                <Stack
                    as={Box}
                    textAlign={'left'}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}>
                    <Heading
                        textTransform={'uppercase'}
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '8xl' }}
                        lineHeight={'10%'}
                        marginBottom={"0"}
                    >
                        Venicius <Text as={'span'} color={'secondary.500'}>Alves</Text>
                    </Heading>
                    <Text color={'gray.500'}>
                        {subtitle}
                    </Text>
                </Stack>
            </Container>
        </>
    );
}
