import { Box, Button, Center, FormControl, FormLabel, Image, Input, Spinner, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react';
import { memo, FC, useEffect, useCallback, useState } from 'react';
import { UserCard } from '../organisms/user/UserCard';
import { useAllUsers } from '../../hooks/userAllUsers';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,

} from '@chakra-ui/react';
import { UserDetail } from '../organisms/user/UserDetail'
import { user } from '../../types/api/user';
import { useLoginUser } from '../../hooks/useLoginUser';



export const UserManagement = memo(() => {

    const { getUsers, loading, users } = useAllUsers();

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [curUser, setCurUser] = useState<user>()

    const onClickUser = useCallback((tempCurUser: user) => {
        onOpen();
        setCurUser(tempCurUser)
    }, []);

    const { loginUser } = useLoginUser();
    const isAdmin = loginUser ? loginUser.isAdmin : false;

    useEffect(() => getUsers(), [])

    return (
        <>
            {loading ? (
                <Center height="100vh">
                    <Spinner />
                </Center>
            ) : (
                    <Wrap p={{ base: 4, md: 10 }}>
                    {users?.map((user) =>
                        <WrapItem key={user.id} mx="auto">
                            <UserCard
                                imageUrl="https://source.unsplash.com/random"
                                userName={user.username}
                                userFullName={user.name}
                                onClick={() => onClickUser(user)}
                            />
                        </WrapItem>
                    )}
                </Wrap>
            )}
            <UserDetail isOpen={isOpen} onClose={onClose} curUser={curUser!} isAdmin={isAdmin} />
        </>

    )
})