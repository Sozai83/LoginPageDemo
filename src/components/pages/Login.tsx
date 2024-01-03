import { memo, FC, useState, ChangeEvent } from 'react';
import { Flex, Box, Heading, Divider, Input, Button, Stack } from '@chakra-ui/react';
import { PrimaryButton } from '../atoms/buttons/PrimaryButton';
import { useAuth } from '../../hooks/useAuth';


export const Login: FC = memo(() => {
    const { login, loading } = useAuth();
    const [userId, setUserId] = useState('');

    const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
        setUserId(e.target.value)
    }

    const onClickLogin = () => login(userId);

    return (
        <Flex
            align="center"
            justify="center"
            height="100vh"
        >
            <Box
                bg="white"
                w="sm"
                borderRadius="md"
                padding={4}
                shadow="md"
            >
                <Heading as="h2" my={4}>User Management Application</Heading>
                <Divider my={4} />
                <Stack spacing={4} py={4} px={8}>
                    {
                        loading ? <p>Loading</p> :
                            <Input placeholder="User Id" value={userId} onChange={onChangeUserId} />
                    }
                    <PrimaryButton
                        onClick={onClickLogin}
                        disabled={userId === ""}
                        loading={loading}
                    >
                        Login
                    </PrimaryButton>
                </Stack>
            </Box>
        </Flex>
    )
}
)