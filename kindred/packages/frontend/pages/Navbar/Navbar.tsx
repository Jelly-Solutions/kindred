import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import { ConnectButton } from '@rainbow-me/rainbowkit';

import logo from '../../public/kin_logo.png';
import ColorModeToggle from '../ColorModeToggle/ColorModeToggle';

import Image from 'next/image';

const Links = ['Ecosystem', 'Community', 'Governance', 'Developers', 'Blog', 'FAQ', 'Jobs'];

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box><Image style={{ height: '50px', width: '50px' }} src={logo} alt={'logo'}
                        /></Box>

                    </HStack>
                    <Flex alignItems={'center'}>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {/* {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))} */}

                            <Link px={2} py={1} rounded={'md'} _hover={{
                                textDecoration: 'none',
                                bg: useColorModeValue('gray.200', 'gray.700'),
                            }} href={'#'}>Ecosystem</Link>

                            <Link px={2} py={1} rounded={'md'} _hover={{
                                textDecoration: 'none',
                                bg: useColorModeValue('gray.200', 'gray.700'),
                            }} href={'#'}>Community</Link>

                            <Link px={2} py={1} rounded={'md'} _hover={{
                                textDecoration: 'none',
                                bg: useColorModeValue('gray.200', 'gray.700'),
                            }} href={'#'}>Governance</Link>



                            <Link px={2} py={1} rounded={'md'} _hover={{
                                textDecoration: 'none',
                                bg: useColorModeValue('gray.200', 'gray.700'),
                            }} href={'#'}>Developers</Link>

                            <Link px={2} py={1} rounded={'md'} _hover={{
                                textDecoration: 'none',
                                bg: useColorModeValue('gray.200', 'gray.700'),
                            }} href={'#'}>Blog</Link>

                            <Link px={2} py={1} rounded={'md'} _hover={{
                                textDecoration: 'none',
                                bg: useColorModeValue('gray.200', 'gray.700'),
                            }} href={'#'}>FAQ</Link>

                            <Link px={2} py={1} rounded={'md'} _hover={{
                                textDecoration: 'none',
                                bg: useColorModeValue('gray.200', 'gray.700'),
                            }} href={'#'}>Jobs</Link>


                        </HStack>
                        {/* <ConnectButton /> */}
                        <ColorModeToggle />
                    </Flex>
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