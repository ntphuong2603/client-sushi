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

export function deleteMenu(values){
    return async(dispatch)=>{
        try {
            const {data} = await axios.post(`${MENU_URL}/delete`,{
                menuID: values.menuID,
                userID: values.userID,
            })
            if (data.success){
                dispatch(menuAction.deleteMenu(data.data))
            }
        } catch (error){
            console.log(error.response.data.message);
            dispatch(menuAction.errorNotification(error.response.data.message))
        }
    }
}