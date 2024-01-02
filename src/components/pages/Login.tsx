import { Flex, Box, Heading, Divider, Input, Button, Stack } from '@chakra-ui/react';
import { memo, FC } from 'react';
import { PrimaryButton } from '../atoms/buttons/PrimaryButton';


export const Login: FC = memo(() => {

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
                    <Input placeholder="User Id" />
                    <PrimaryButton>Login</PrimaryButton>
                </Stack>
            </Box>
        </Flex>
    )
})