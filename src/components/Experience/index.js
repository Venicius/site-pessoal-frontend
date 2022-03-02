import { CheckIcon } from '@chakra-ui/icons';
import {
    Box,
    Container,
    Heading, HStack, Icon, SimpleGrid, Stack, Text, VStack
} from '@chakra-ui/react';

// Replace test data with your own
const features = Array.apply(null, Array(8)).map(function (x, i) {
    return {
        id: i,
        time: 'janeiro/2020 - atual',
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    };
});

export default function GridListWithHeading() {
    return (
        <Box p={4}>
            <Stack spacing={4} as={Container} maxW={'4xl'} textAlign={'left'}>
                <Heading
                    textTransform={'uppercase'}
                    fontWeight={600}
                    fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}
                    lineHeight={'10%'}>Experiência</Heading>
            </Stack>

            <Container maxW={'4xl'} mt={10}>
                <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }} spacing={10}>
                    {features.map((feature) => (
                        <HStack key={feature.id} align={'top'}>
                            <Box color={'green.400'} px={2}>
                                <Icon as={CheckIcon} />
                            </Box>
                            <VStack align={'start'} >
                                <Text fontWeight={600}>{feature.title}</Text>
                                <Text color={'gray.600'}>{feature.time}</Text>
                                <Text color={'gray.700'}>{feature.text}</Text>
                            </VStack>
                        </HStack>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}