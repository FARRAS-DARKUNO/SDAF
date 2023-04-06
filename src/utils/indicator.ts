export const indicator = ({angin,gelombang} : Props) => {
    if (angin <= 10.8 || gelombang <= 4) {
        return "Cuaca Aman"
    }
    else if (angin <=17.2 || gelombang <= 5.5){
        return "Berhati-Hati"
    }
    else if (angin > 17.2 || gelombang > 5.5) {
        return "Cuaca Tidak Aman"
    }

    return "Cuaca Tidak Menentu"
}

interface Props {
    angin : number,
    gelombang : number
}