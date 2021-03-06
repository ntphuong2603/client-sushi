import * as userAction from './actionIndex'
import * as tokenHandling from '../../tools/handleToken'
import axios from 'axios'
const USER_URL = 'http://localhost:5000/api/users'

// axios.defaults.headers = {
//     "Content-type": "application/json",
//     // "Access-Control-Allow-Credentials":true
// }
// axios.defaults.withCredentials = true

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
            // console.log(error.response.data.message);
            dispatch(userAction.errorNotification(error.response.data.message))
        }
        
    }
}

export function userLogin({email, password, rememberMe}) {
    return async(dispatch)=>{
        try {
            console.log(email, password, rememberMe);
            const response = await axios.post(`${USER_URL}/login`,{
                email:email,
                password:password,
                getToken: rememberMe,
            })
            // console.log("Response data:",response.headers);
            // console.log("Response data:",response.headers['Set-Cookie']);
            // console.log('Cookie:', response.headers)
            tokenHandling.saveToken(response.data.data.token)
            if (response.data.success){
                // console.log('Login:', response.json());
                dispatch(userAction.userLogin({data: response.data.data, auth: true}))
                dispatch(userAction.successNotification("Login successfully"))
            }

            // fetch(`${USER_URL}/login`,{
            //     method:"POST",
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     credentials: 'same-origin',
            //     body:JSON.stringify({
            //         email:email,
            //         password:password,
            //         getToken: rememberMe,
            //     })
            // }).then(response=>{
            //     console.log('Cookie:', response.cookie);                                   
            //     response.headers.forEach(item=>console.log(item))
            //     return response.json()
            // }).then(
            //     json=>{
            //         console.log("Response data:",json);
            //         tokenHandling.saveToken(json.data.token)
            //         if (json.success){
            //             // console.log('Login:', response.json());
            //             dispatch(userAction.userLogin({data: json.data, auth: true}))
            //             dispatch(userAction.successNotification("Login successfully"))
            //         }
            //     }
            // )
            
        } catch (error){
            // console.log(error);
            dispatch(userAction.errorNotification('Email or password is incorrect, please check again!'))
        }
    }
}

export function userLogout() {
    return async(dispatch)=>{
        try {
            //clear token in localStorage
            tokenHandling.removeToken("my-access-token")
            dispatch(userAction.userLogout())
            dispatch(userAction.infoNotification('Logout successfully'))
            //return to homepage
            // props.history.push('/')
        } catch (error){
            dispatch(userAction.errorNotification(""))
        }
    }
}

export function userAuthenticate() {
    return async(dispatch)=>{
        try {
            //get token from localStorage
            const headers = tokenHandling.getHeader("my-access-token")
            // console.log('Headers:', headers);
            const response = await axios.get(`${USER_URL}/isUserAuthenticate`, headers)
            // console.log('Authenticate user: ',response);
            if (response.data.data.error){
                dispatch(userAction.userAuthenticate({auth: false}))
                // props.history.push('/')
            }
            dispatch(userAction.userAuthenticate({data: response.data.data, auth: true}))
        } catch (error){
            // console.log('Error:', error);
            dispatch(userAction.userAuthenticate({auth: false}))
            // dispatch(userAction.errorNotification())
        }
    }
}