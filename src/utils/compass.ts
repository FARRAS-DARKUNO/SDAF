export const compass = ( {data} : Props) => {

    let convert = data.toLowerCase()

    switch(convert) {
        case 'utara' :
            return 0
        case 'timur laut':
            return 45
        case 'timur' :
            return 90
        case 'tenggara':
            return 135
        case 'selatan':
            return 180
        case 'barat daya' :
            return 225
        case 'barat' :
            return 270
        case 'barat laut' :
            return 315
        default :
            return 0
    }
}

interface Props {
    data : string
}