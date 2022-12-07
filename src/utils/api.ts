
const api = 'https://sfad.fly.dev/'

//https://sfad-kiluan.herokuapp.com/kuat-aruss/grafik?year=2022&month=1
//https://sfad-kiluan.herokuapp.com/kuat-aruss/average?year=2022&month=1

//user login
//https://sfad-kiluan.herokuapp.com/user/login
// body :
// {
//   "email" : "aab@gmail.com",
//   "password" : "aab"
// }

//user register
//https://sfad-kiluan.herokuapp.com/user/register
// body :
// {
//   "name" : "farras",
//   "email": "aa@gami.com",
//   "instansi" : "pp",
//   "password" : "123"
// }

export const getGrafikApi = ({name, month, year} : Props) => {
 return api + name + '/grafik?year=' + year + '&month=' + month
}

export const getAvarageApi = ({name, month, year} : Props) => {
 return api + name + '/average?year=' + year + '&month=' + month
}

export const loginApi = () => api + "user/login"

export const registerApi = () => api + 'user/register'  

export const getDataUserById = ({id} : Id) => {
    return api + 'user/' + id
}

export const cuacaApi = () => "https://cuaca-gempa-rest-api.vercel.app/weather/lampung/pringsewu"

interface Props  {
    name : String,
    month : number,
    year : string
}

interface Id {
    id : string
}