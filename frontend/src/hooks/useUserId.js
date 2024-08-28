
import { useDispatch, useSelector } from 'react-redux'
import bookerApi from '../api/bookerApi'
import { setUser } from '../store/user/userSlice'

export const useUserId = () => {
    const { customer } = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const getUserById = async (user_id) => {
        // const { data } = await bookerApi.get(`customer/user/${user_id}`)
        // const { data } = await bookerApi.get(`${import.meta.env.VITE_API_URL}customer/user/${user_id}`)
        const { data } = await bookerApi.get(`customer/user/${user_id}`)


        dispatch(setUser(data));
    }


    return {
        //* Porperties
        customer,
        //* Methods
        getUserById
    }
}
