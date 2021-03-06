import * as userAction from './actionIndex'
import * as tokenHandling from '../../tools/handleToken'
import cookie from 'react-cookies'
import axios from 'axios'

const USER_URL = 'http://localhost:5000/api/users'

axios.defaults.withCredentials = true

export function userRegister({email, password}) {
    return async(dispatch)=>{
        try {
            const user = await axios.post(`${USER_URL}/register`,{
                email:email,
                password:password,
            })
            if (user){
                dispatch(userAction.userRegister(user))
                dispatch(userAction.successNotification('Welcome to MATRIX, please check email to active your account'))
            } 
        } catch (error){
            dispatch(userAction.errorNotification(error.response.data.message))
        }
        
    }
}

export function userLogin({email, password, rememberMe}) {
    return async(dispatch)=>{
        try {
            const {data} = await axios.post(`${USER_URL}/login`,{
                email:email,
                password:password,
                getToken: rememberMe,
            })
                const name = "my-access-token"
                tokenHandling.saveToken({name: name, value: cookie.load("my-access-token")})
            if (data.success){
                dispatch(userAction.userLogin({data: data.data, auth: true}))
                dispatch(userAction.successNotification(data.msg))
            }

        } catch (error){
            dispatch(userAction.errorNotification('Email or password is incorrect, please check again!'))
        }
    }
}

export function userLogout() {
    return async(dispatch)=>{
        try {
            tokenHandling.removeToken("my-access-token")
            dispatch(userAction.userLogout())
            dispatch(userAction.infoNotification('Logout successfully'))
        } catch (error){
            dispatch(userAction.errorNotification(""))
        }
    }
}

export function userAuthenticate() {
    return async(dispatch)=>{
        try {
            const headers = tokenHandling.getHeader("my-access-token") 
            const {data} = await axios.get(`${USER_URL}/isUserAuthenticate`, headers)
            if (data.error){
                dispatch(userAction.userAuthenticate({auth: false}))
            }
            dispatch(userAction.userAuthenticate({data: data.data, auth: true}))
        } catch (error){
            dispatch(userAction.userAuthenticate({auth: false}))
        }
    }
}