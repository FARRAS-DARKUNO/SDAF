
const api = 'https://sfad-kiluan.herokuapp.com/'

//https://sfad-kiluan.herokuapp.com/kuat-aruss/grafik?year=2022&month=1
//https://sfad-kiluan.herokuapp.com/kuat-aruss/average?year=2022&month=1


export const getGrafikApi = ({name, month, year} : Props) => {
 return api + name + '/grafik?year=' + year + '&month=' + month
}

export const getAvarageApi = ({name, month, year} : Props) => {
 return api + name + '/average?year=' + year + '&month=' + month
}

interface Props  {
    name : String,
    month : number,
    year : string
}