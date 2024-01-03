import axios from "axios";
import { useState, useCallback } from "react";
import { user } from "../types/api/user";
import { useMessage } from "./useMessage";

type Props = {
    id: number;
    users: Array<user>;
}

export const useSelectUsers = () => {

    const [selectedUser, setSelectedUser] = useState<user>();

    const onSelectUsers = useCallback((props: Props) => {
        const { id, users } = props;
        const targetUser = users.find((user) => user.id === id)
        setSelectedUser(targetUser);

    }, [])

    return { onSelectUsers, selectedUser };
}