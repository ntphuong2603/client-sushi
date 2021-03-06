import * as categoryAction from './actionIndex'
import axios from 'axios'
const CATEGORY_URL = 'http://localhost:5000/api/categories'

export function getAllCategories() {
    return async(dispatch)=>{
        try {
            const response = await axios.get(`${CATEGORY_URL}/readAll`)
            const { success, data} = response.data
            // console.log("Result:", data);
            if (success){
                dispatch(categoryAction.getAllCategories(data))
                // dispatch(menuAction.successNotification())
            } 
        } catch (error){
            // console.log(error);
            dispatch(categoryAction.errorNotification(error))
        }
        
    }
}

export function getCategoryByID() {
    return async(dispatch)=>{
        try {
            
        } catch (error){
            dispatch(categoryAction.errorNotification(error.response.data.message))
        }
        
    }
}

export function deleteCategoryByID() {
    return async(dispatch)=>{
        try {

        } catch (error){
            dispatch(categoryAction.errorNotification(error.response.data.message))
        }
        
    }
}