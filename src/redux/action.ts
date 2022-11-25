export const GET_MONTH_VALUE = 'GET_MONTH_VALUE'
export const GET_YEAR_VALUE = 'GET_YEAR_VALUE'
export const GET_USER_NAME = 'GET_USER_NAME'
export const GET_ID_USER = 'GET_ID_USER'

export const setMonthValue = (data : number) => ({
    type : GET_MONTH_VALUE,
    data : data
})

export const setYearValue = (data : string) => ({
    type: GET_YEAR_VALUE,
    data : data
})

export const getUserName = (data : string) => ({
    type : GET_USER_NAME,
    data : data
})

export const getIdUser = (data : string) => ({
    type : GET_ID_USER,
    data : data
})