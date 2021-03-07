import * as menuAction from './actionIndex'
// import * as tokenHandling from '../../tools/handleToken'
import axios from 'axios'
const MENU_URL = 'http://localhost:5000/api/menus'


export function getAllMenus() {
    return async(dispatch)=>{
        try {
            const {data} = await axios.get(`${MENU_URL}/readAll`)
            if (data.success){
                dispatch(menuAction.getAllMenus(data.data))
                // dispatch(menuAction.successNotification())
            } 
        } catch (error){
            console.log(error.response.data.message);
            dispatch(menuAction.errorNotification(error.response.data.message))
        }
        
    }
}

// export function userLogin({email, password, rememberMe}) {
//     return async(dispatch)=>{
//         try {
//             // console.log(email, password, rememberMe);
//             const response = await axios.post(`${MENU_URL}/login`,{
//                 email:email,
//                 password:password,
//                 getToken: rememberMe,
//             })
//             // console.log("user",response);
//             tokenHandling.saveToken(response.data.data.token)
//             if (response){
//                 dispatch(menuAction.userLogin({data: response.data, auth: true}))
//                 dispatch(menuAction.successNotification("Login successfully"))
//             }
//         } catch (error){
//             console.log(error);
//             dispatch(menuAction.errorNotification())
//         }
//     }
// }

// export function userLogout(props) {
//     return async(dispatch)=>{
//         try {
//             //clear token in localStorage
//             tokenHandling.removeToken("my-access-token")
//             dispatch(menuAction.userLogout())
//             dispatch(menuAction.closeDrawer())
//             dispatch(menuAction.infoNotification('Logout successfully'))
//             //return to homepage
//             props.history.push('/')
//         } catch (error){
//             dispatch(menuAction.errorNotification(""))
//         }
//     }
// }

// export function userAuthenticate({token}) {
//     return async(dispatch, getState)=>{
//         try {
//             //get token from localStorage
//         } catch (error){
            
//         }
//     }
// }