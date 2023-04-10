import { 
    GET_MONTH_VALUE, 
    GET_USER_NAME, 
    GET_YEAR_VALUE,
    GET_ID_USER
} from "./action";

const initialState = {
    month : 1,
    year : '2023',
    userName : 'Pemantau',
    idUser : ''
}

function userReducer(state = initialState, action :any) {
    switch (action.type) {
        case GET_MONTH_VALUE :
            return { ...state, month : action.data};
        case GET_YEAR_VALUE :
            return { ...state, year : action.data};
        case GET_USER_NAME:
            return {...state, userName : action.data};
        case GET_ID_USER:
            return {...state, idUser : action.data};
        default :
            return state
    }
}

export default userReducer