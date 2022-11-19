export const GET_MONTH_VALUE = 'GET_MONTH_VALUE'
export const GET_YEAR_VALUE = 'GET_YEAR_VALUE'

export const setMonthValue = (data : number) => ({
    type : GET_MONTH_VALUE,
    data : data
})

export const setYearValue = (data : string) => ({
    type: GET_YEAR_VALUE,
    data : data
})