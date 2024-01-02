import { memo, FC } from 'react'
import { ChakraProvider, Flex, Heading, Link, Box, IconButton, Drawer, DrawerOverlay, DrawerBody, DrawerContent, Button, useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

export const Header: FC = memo(() => {


    const { isOpen, onOpen, onClose } = useDisclosure();
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
                <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
                    <Heading as="h1" fontSize={{ base: 'lg', md: 'xl' }}>
                        User Management Application
                    </Heading>
                </Flex>

                <Flex align="center" fontSize="md" flexGrow={2} display={{ base: "none", md: "flex" }}>
                    <Box pr={4}><Link>Users</Link></Box>
                    <Box pr={4}><Link>Settings</Link></Box>
                </Flex>
                <IconButton icon={<HamburgerIcon />}
                    aria-label="menu button"
                    size="sm"
                    variant="unstyled"
                    display={{ base: "block", md: "none" }}
                    onClick={onOpen}
                />
            </Flex>
            <>
                <Drawer isOpen={isOpen} onClose={onClose}>
                    <DrawerOverlay>
                        <DrawerContent>
                            <DrawerBody p={0} bg="gray.100">
                                <Button w="100%"><Link>Top</Link></Button>
                                <Button w="100%"><Link>Users</Link></Button>
                                <Button w="100%"><Link>Settings</Link></Button>
                            </DrawerBody>
                        </DrawerContent>
                    </DrawerOverlay>
                </Drawer>
            </>
        </ChakraProvider >

    )
})