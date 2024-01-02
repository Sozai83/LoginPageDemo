import { memo, FC } from 'react'
import { Drawer, DrawerOverlay, DrawerContent, DrawerBody, Button, Link } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onClickHome: () => void;
    onClickUser: () => void;
    onClickSettings: () => void;
}

export const MenuDrawer: FC<Props> = memo((props) => {
    const { isOpen, onClose, onClickHome, onClickUser, onClickSettings } = props;
    return (
        <Drawer isOpen={isOpen} onClose={onClose}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerBody p={0} bg="gray.100">
                        <Button w="100%"><Link onClick={onClickHome}>Top</Link></Button>
                        <Button w="100%"><Link onClick={onClickUser}>Users</Link></Button>
                        <Button w="100%"><Link onClick={onClickSettings}>Settings</Link></Button>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    )
})