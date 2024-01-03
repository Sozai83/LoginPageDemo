import { useToast } from "@chakra-ui/react"
import { useCallback, useState } from "react"
import { user } from "../types/api/user";
import axios from "axios";
import { useMessage } from "./useMessage";

type Props = {
    title: string;
    status: "info" | "warning" | "success" | "error";
}


export const useAllUsers = () => {

    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState<Array<user>>();
    const showMessage = useMessage()

    const getUsers = useCallback(() => {
        setLoading(true);
        axios.get<Array<user>>('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                if (res.data) {
                    setTimeout(() => {
                        setUsers(res.data)
                    }, 1000)
                }
                else {
                    showMessage({ title: 'Could not find users.', status: 'error' })
                }
            })
            .catch(
                err => showMessage({ title: 'Could not find users. Please try again.', status: 'error' })
            )
            .finally(() => setTimeout(() => setLoading(false), 1000))

    }, [])

    return { getUsers, loading, users };
}