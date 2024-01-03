import { Box, Button, Center, Image, Spinner, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react';
import { memo, FC, useEffect } from 'react';
import { UserCard } from '../organisms/user/UserCard';
import { useAllUsers } from '../../hooks/userAllUsers';



export const UserManagement = memo(() => {

    const { getUsers, loading, users } = useAllUsers();

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
                                userFullName={user.name} />
                        </WrapItem>
                    )}
                </Wrap>
            )}
        </>

    )
})