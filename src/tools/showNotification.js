import { toast } from 'react-toastify'
import { NOTIFICATION_ACTIONS } from '../store/actionTypes';

export const showNotification = (type, msg) => {
    switch (type){
        case NOTIFICATION_ACTIONS.SUCCESS:
            toast.success(msg, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500,
            })
            break;
        case NOTIFICATION_ACTIONS.ERROR:
            toast.error(msg, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: false,
                closeOnClick: true,
            })
            break;
        case NOTIFICATION_ACTIONS.INFO:
            toast.info(msg, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            })
            break;
        default:
            return false;
    }
}