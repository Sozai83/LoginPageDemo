import { memo, FC, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link as ChakraLink, ChakraProvider, Flex, Heading, Box, useDisclosure } from '@chakra-ui/react'
import { MenuIconButton } from '../../atoms/buttons/MenuIconButton';
import { MenuDrawer } from '../../molcules/MenuDrawer';

export const Header: FC = memo(() => {


    const { isOpen, onOpen, onClose } = useDisclosure();

    const navigate = useNavigate();
    const onClickHome = useCallback(() => navigate('/'), [])
    const onClickUser = useCallback(() => navigate('/home/usermanagement'), [])
    const onClickSettings = useCallback(() => navigate('/settings'), [])

    return (
        <ChakraProvider>
            <Flex
                as="nav"
                bg="teal.500"
                color="gray.100"
                align="center"
                justify="space-between"
                padding={{ base: 3, md: 5 }}
            >
                <Flex
                    align="center"
                    as="a"
                    onClick={onClickHome}
                    mr={8}
                    _hover={{ cursor: "pointer" }}
                >
                    <Heading as="h1" fontSize={{ base: 'lg', md: 'xl' }}>
                        User Management Application
                    </Heading>
                </Flex>

                <Flex align="center" fontSize="md" flexGrow={2} display={{ base: "none", md: "flex" }}>
                    <Box pr={4}>
                        <ChakraLink onClick={onClickUser}>
                            Users
                        </ChakraLink></Box>
                    <Box pr={4}>
                        <ChakraLink onClick={onClickSettings}>
                            Settings
                        </ChakraLink>
                    </Box>
                </Flex>
                <MenuIconButton onOpen={onOpen} />
            </Flex>
            <MenuDrawer
                isOpen={isOpen}
                onClose={onClose}
                onClickHome={onClickHome}
                onClickUser={onClickUser}
                onClickSettings={onClickSettings}
            />
        </ChakraProvider >

    )
})
