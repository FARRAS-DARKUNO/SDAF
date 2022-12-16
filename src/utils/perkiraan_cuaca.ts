import axios from "axios"
import { cuacaApi } from "./api"
import { ReactSetter } from "./interface"
import { convertCuacaImage } from "./convert_image"

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
                        gambar : convertCuacaImage({data :response.data.data.params[6].times[1].code }),
                        suhu : response.data.data.params[5].times[1].celcius
                    },
                    {
                        waktu : "Siang",
                        status : response.data.data.params[6].times[2].name,
                        gambar : convertCuacaImage({data :response.data.data.params[6].times[2].code }),
                        suhu : response.data.data.params[5].times[2].celcius
                    },
                    {
                        waktu : "Malam",
                        status : response.data.data.params[6].times[3].name,
                        gambar : convertCuacaImage({data :response.data.data.params[6].times[3].code }),
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
                        gambar : convertCuacaImage({data :response.data.data.params[6].times[5].code }),
                        suhu : response.data.data.params[5].times[5].celcius
                    },
                    {
                        waktu : "Siang",
                        status : response.data.data.params[6].times[6].name,
                        gambar : convertCuacaImage({data :response.data.data.params[6].times[7].code }),
                        suhu : response.data.data.params[5].times[6].celcius
                    },
                    {
                        waktu : "Malam",
                        status : response.data.data.params[6].times[7].name,
                        gambar : convertCuacaImage({data :response.data.data.params[6].times[7].code }),
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
                        gambar : convertCuacaImage({data :response.data.data.params[6].times[9].code }),
                        suhu : response.data.data.params[5].times[9].celcius
                    },
                    {
                        waktu : "Siang",
                        status : response.data.data.params[6].times[10].name,
                        gambar : convertCuacaImage({data :response.data.data.params[6].times[10].code }),
                        suhu : response.data.data.params[5].times[10].celcius
                    },
                    {
                        waktu : "Malam",
                        status : response.data.data.params[6].times[11].name,
                        gambar : convertCuacaImage({data :response.data.data.params[6].times[11].code }),
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

