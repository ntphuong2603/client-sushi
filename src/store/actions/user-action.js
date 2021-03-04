import * as userAction from './actionIndex'
import * as tokenHandling from '../../tools/handleToken'
import axios from 'axios'
const USER_URL = 'http://localhost:5000/api/users'


export function userRegister({email, password}) {
    return async(dispatch, getState)=>{
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
            console.log(error.response.data.message);
            dispatch(userAction.errorNotification(error.response.data.message))
        }
        
    }
}

export function userLogin({email, password, rememberMe}) {
    return async(dispatch)=>{
        try {
            // console.log(email, password, rememberMe);
            const response = await axios.post(`${USER_URL}/login`,{
                email:email,
                password:password,
                getToken: rememberMe,
            })
            console.log("user",response);
            tokenHandling.saveToken(response.data.data.token)
            if (response){
                dispatch(userAction.userLogin({data: response.data, auth: true}))
                dispatch(userAction.successNotification("Login successfully"))
            }
        } catch (error){
            console.log(error);
            dispatch(userAction.errorNotification())
        }
    }
}

export function userLogout(props) {
    return async(dispatch)=>{
        try {
            //clear token in localStorage
            tokenHandling.removeToken("my-access-token")
            dispatch(userAction.userLogout())
            dispatch(userAction.closeDrawer())
            dispatch(userAction.infoNotification('Logout successfully'))
            //return to homepage
            props.history.push('/')
        } catch (error){
            dispatch(userAction.errorNotification(""))
        }
    }
}

export function userAuthenticate({token}) {
    return async(dispatch, getState)=>{
        try {
            //get token from localStorage
        } catch (error){
            
        }
    }
}