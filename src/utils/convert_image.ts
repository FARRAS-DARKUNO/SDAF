export const BERAWAN = "https://res.cloudinary.com/diyu8lkwy/image/upload/v1670415239/itera%20herro%20icon/cloudy_weather_icon_151782_1_lmpnal.png"
export const CERAH = "https://res.cloudinary.com/diyu8lkwy/image/upload/v1670415239/itera%20herro%20icon/pngwing_2_odiwie.png"
export const PETIR = "https://res.cloudinary.com/diyu8lkwy/image/upload/v1670415239/itera%20herro%20icon/image_11_lnqlxg.png"
export const HUJAN = "https://res.cloudinary.com/diyu8lkwy/image/upload/v1670415239/itera%20herro%20icon/pngwing_1_us3mka.png"

export const convertCuacaImage = ({data} : Props) => {
    if (data == 1 || data == 0) {
        return CERAH
    }
    else if (data >= 2 && data <= 45){
        return BERAWAN
    }
    else if (data >= 60 && data <= 80){
        return HUJAN
    }
    else if (data >= 90 && data <= 100){
        return HUJAN
    }

    return BERAWAN

}

interface Props {
    data : number
}