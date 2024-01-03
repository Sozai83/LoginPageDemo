import { memo, FC } from 'react'
import { Box, Stack, Image, Text } from '@chakra-ui/react'

type Props = {
    imageUrl: string;
    userName: string;
    userFullName: String;
}

export const UserCard: FC<Props> = memo((props) => {

    const { imageUrl, userName, userFullName } = props;

    return (
        <Box
            w="260px"
            h="260px"
            bg="white"
            borderRadius="10px"
            shadow="md"
            p={4}
            _hover={{ cursor: "pointer", opacity: 0.8 }}
        >
            <Stack textAlign="center">
                <Image
                    boxSize="160px"
                    borderRadius="full"
                    src={imageUrl}
                    alt={userName}
                    m="10px auto"
                />
                <Text fontSize="lg" fontWeight="bold">{userName}</Text>
                <Text fontSize="sm" color="gray">{userFullName}</Text>
            </Stack>
        </Box>
    )
})
