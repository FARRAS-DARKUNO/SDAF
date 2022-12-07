import axios from "axios"
import { cuacaApi } from "./api"
import { ReactSetter } from "./interface"

const dataPerkiraanCuaca = ({setData, isLoading}:Props) => {
    axios.get(cuacaApi())
    .then(response => {

        const perkiraanCuaca = [
            {
                tiitle : "Perkiraan Cuaca Hari Ini",
                data : [
                    {
                        waktu : 'Pagi',
                        status : response.data.data.params[6].times[1].name,
                        gambar : "https://res.cloudinary.com/diyu8lkwy/image/upload/v1670415239/itera%20herro%20icon/cloudy_weather_icon_151782_1_lmpnal.png",
                        suhu : response.data.data.params[5].times[1].celcius
                    },
                    {
                        waktu : "Siang",
                        status : response.data.data.params[6].times[2].name,
                        gambar : "https://res.cloudinary.com/diyu8lkwy/image/upload/v1670415239/itera%20herro%20icon/cloudy_weather_icon_151782_1_lmpnal.png",
                        suhu : response.data.data.params[5].times[2].celcius
                    },
                    {
                        waktu : "Malam",
                        status : response.data.data.params[6].times[3].name,
                        gambar : "https://res.cloudinary.com/diyu8lkwy/image/upload/v1670415239/itera%20herro%20icon/cloudy_weather_icon_151782_1_lmpnal.png",
                        suhu : response.data.data.params[5].times[3].celcius
                    }
                ]
            },
            {
                tiitle : "Perkiraan Cuaca Esok Hari",
                data : [
                    {
                        waktu : "Pagi",
                        status : response.data.data.params[6].times[5].name,
                        gambar : "https://res.cloudinary.com/diyu8lkwy/image/upload/v1670415239/itera%20herro%20icon/cloudy_weather_icon_151782_1_lmpnal.png",
                        suhu : response.data.data.params[5].times[5].celcius
                    },
                    {
                        waktu : "Siang",
                        status : response.data.data.params[6].times[6].name,
                        gambar : "https://res.cloudinary.com/diyu8lkwy/image/upload/v1670415239/itera%20herro%20icon/cloudy_weather_icon_151782_1_lmpnal.png",
                        suhu : response.data.data.params[5].times[6].celcius
                    },
                    {
                        waktu : "Malam",
                        status : response.data.data.params[6].times[7].name,
                        gambar : "https://res.cloudinary.com/diyu8lkwy/image/upload/v1670415239/itera%20herro%20icon/cloudy_weather_icon_151782_1_lmpnal.png",
                        suhu : response.data.data.params[5].times[7].celcius
                    }
                ]
            },
            {
                tiitle : "Perkiraan Cuaca Lusa",
                data : [
                    {
                        waktu : "Pagi",
                        status : response.data.data.params[6].times[9].name,
                        gambar : "https://res.cloudinary.com/diyu8lkwy/image/upload/v1670415239/itera%20herro%20icon/cloudy_weather_icon_151782_1_lmpnal.png",
                        suhu : response.data.data.params[5].times[9].celcius
                    },
                    {
                        waktu : "Siang",
                        status : response.data.data.params[6].times[10].name,
                        gambar : "https://res.cloudinary.com/diyu8lkwy/image/upload/v1670415239/itera%20herro%20icon/cloudy_weather_icon_151782_1_lmpnal.png",
                        suhu : response.data.data.params[5].times[10].celcius
                    },
                    {
                        waktu : "Malam",
                        status : response.data.data.params[6].times[11].name,
                        gambar : "https://res.cloudinary.com/diyu8lkwy/image/upload/v1670415239/itera%20herro%20icon/cloudy_weather_icon_151782_1_lmpnal.png",
                        suhu : response.data.data.params[5].times[11].celcius
                    }
                ]
            }
        ]
        setData(perkiraanCuaca)

    })
}

export default dataPerkiraanCuaca

interface Props {
    setData: ReactSetter<any>,
    isLoading: ReactSetter<boolean>,
}

