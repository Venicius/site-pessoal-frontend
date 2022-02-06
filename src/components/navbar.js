import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
    Avatar, Box, Flex, HStack, IconButton, Link, Stack, useDisclosure
} from '@chakra-ui/react';

const Links = ['Contato', 'Portifólio'];

const NavLink = ({ children }) => (
    <Link
        px={4}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: 'black',
        }}
        href={'#contato'}>
        {children}
    </Link>
);

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg={'primary.500'} w='100%' position='relative' top={0} paddingInline={8} color={'white'} >
                <Flex h={'10vh'} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        color={'secondary.500'}
                        bgColor={'primary.500'}
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>

                        <Link _hover={{ textDecoration: 'none', }} href='/'>
                            <Flex alignItems={'center'}>
                                <Avatar
                                    size={'md'}
                                    src={
                                        'img/me.jpg'
                                    }
                                />
                                <Box p={4}>Venicius Alves</Box>
                            </Flex>
                        </Link>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>

                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}