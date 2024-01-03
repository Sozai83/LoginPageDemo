import { memo, FC, useState, useEffect } from 'react'
import { Box, Stack, Image, Text, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import { user } from '../../../types/api/user';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    isAdmin: boolean;
    curUser: user | null;
}

export const UserDetail: FC<Props> = memo((props) => {

    const { isOpen, onClose, curUser, isAdmin } = props;
    const [userName, setUserName] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        setUserName(curUser?.username!)
        setName(curUser?.name!)
        setEmail(curUser?.email!)
        setPhone(curUser?.phone!)
    }, [curUser])


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
                            <Input value={userName} onChange={(e) => setUserName(e.target.value)} isReadOnly={!isAdmin} />
                            <FormLabel>Full Name:</FormLabel>
                            <Input value={name} onChange={(e) => setName(e.target.value)} isReadOnly={!isAdmin} />
                            <FormLabel>Email:</FormLabel>
                            <Input value={email} onChange={(e) => setEmail(e.target.value)} isReadOnly={!isAdmin} />
                            <FormLabel>Phone:</FormLabel>
                            <Input value={phone} onChange={(e) => setPhone(e.target.value)} isReadOnly={!isAdmin} />
                        </FormControl>
                    </Stack>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button>
                    {isAdmin && (
                        <Button colorScheme='teal' mr={3}>
                            Edit
                        </Button>
                    )
                    }
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
})
