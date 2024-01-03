import { useCallback, useState } from "react"
import axios from 'axios'
import { user } from "../types/api/user"
import { useNavigate } from "react-router-dom"
import { useMessage } from "./useMessage"

export const useAuth = () => {

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const showMessage = useMessage()


    const login = useCallback((id: string) => {
        setLoading(true)
        axios.get<user>(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => {
                if (res.data) {
                    setTimeout(() => {
                        navigate('/home')
                        showMessage({ title: 'Login Successful', status: 'success' })
                    }, 2000)
                }
                else {
                    showMessage({ title: 'Could not find user', status: 'error' })
                }
            })
            .catch(
                err => showMessage({ title: 'Could not login. Please try again.', status: 'error' })
            )
            .finally(() => setTimeout(() => setLoading(false), 2000))
    }, [])

    return { login, loading }
}