import { GET_MONTH_VALUE, GET_YEAR_VALUE } from "./action";

const initialState = {
    month : 1,
    year : '2022'
}

function userReducer(state = initialState, action :any) {
    switch (action.type) {
        case GET_MONTH_VALUE :
            return { ...state, month : action.data};
        case GET_YEAR_VALUE :
            return { ...state, year : action.data};
        default :
            return state
    }
}

export default userReducer