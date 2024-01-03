import { Button } from '@chakra-ui/react';
import { memo, FC, ReactNode } from 'react'

type Props = {
    children: ReactNode;
    onClick: () => void;
    disabled?: boolean;
    loading?: boolean;
}

export const PrimaryButton: FC<Props> = memo((props) => {
    const { children, onClick, disabled = false, loading = false } = props;
    return (
        <Button
            bg="teal"
            color="white"
            _hover={{ opacity: "0.8" }}
            onClick={onClick}
            disabled={disabled || loading}
            isLoading={loading}
        >
            {children}
        </Button>
    )
})