import { useCallback, useState } from "react"
import axios from 'axios'
import { user } from "../types/api/user"
import { useNavigate } from "react-router-dom"
import { useMessage } from "./useMessage"
import { useLoginUser } from "./useLoginUser"

export const useAuth = () => {

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const showMessage = useMessage()
    const { setLoginUser } = useLoginUser();


    const login = useCallback((id: string) => {
        setLoading(true)
        axios.get<user>(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => {
                if (res.data) {
                    setTimeout(() => {
                        navigate('/home')
                        const isAdmin = res.data.id === 10 ? true : false
                        setLoginUser({ ...res.data, isAdmin })
                        showMessage({ title: `Login Successful. You are logged in as ${res.data.username}.`, status: 'success' })
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