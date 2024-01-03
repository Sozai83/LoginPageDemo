import { memo, FC } from 'react'
import { Box, Stack, Image, Text, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import { user } from '../../../types/api/user';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    curUser: user | undefined;
}

export const UserDetail: FC<Props> = memo((props) => {

    const { isOpen, onClose, curUser } = props;


    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            autoFocus={false}
            motionPreset="slideInBottom"
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>User Details</ModalHeader>
                <ModalCloseButton />
                <ModalBody mx={4}>
                    <Stack spacing={4}>
                        <FormControl>
                            <FormLabel>Name:</FormLabel>
                            <Input value={curUser?.username} isReadOnly />
                            <FormLabel>Full Name:</FormLabel>
                            <Input value={curUser?.name} isReadOnly />
                            <FormLabel>Email:</FormLabel>
                            <Input value={curUser?.email} isReadOnly />
                            <FormLabel>Phone:</FormLabel>
                            <Input value={curUser?.phone} isReadOnly />
                        </FormControl>
                    </Stack>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
})
