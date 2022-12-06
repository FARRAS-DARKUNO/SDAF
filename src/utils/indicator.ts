export const indicator = ({angin,gelombang} : Props) => {
    if (angin <= 21 || gelombang <= 2.9) {
        return "Cuaca Aman"
    }
    else if (angin <=27 || gelombang <= 3.9){
        return "Berhati-Hati"
    }
    else if (angin > 27 || gelombang > 3.9) {
        return "Cuaca Tidak Aman"
    }

    return "Cuaca Tidak Menentu"
}

interface Props {
    angin : number,
    gelombang : number
}