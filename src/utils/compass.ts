export const compass = ( {data} : Props) => {

    let convert = data.toLowerCase()

    switch(convert) {
        case 'utara' :
            return 0
        case 'timur laut':
            return 315
        case 'timur' :
            return 270
        case 'tenggara':
            return 225
        case 'selatan':
            return 180
        case 'barat daya' :
            return 135
        case 'barat' :
            return 90
        case 'barat laut' :
            return 45
        default :
            return 0
    }
}

export const convertCompass = ({data}: Props) => {
    let convert = data.toLowerCase()

    switch(convert) {
        case 'utara' :
            return "0"
        case 'timur laut':
            return "45"
        case 'timur' :
            return "270"
        case 'tenggara':
            return "135"
        case 'selatan':
            return "180"
        case 'barat daya' :
            return "225"
        case 'barat' :
            return "90"
        case 'barat laut' :
            return "315"
        default :
            return "0"
    }
}

interface Props {
    data : string
}


