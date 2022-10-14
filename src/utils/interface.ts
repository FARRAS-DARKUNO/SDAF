export interface DataContain {
    id: number,
    name: string,
    value: number,
    type: string,
}

export interface DataFilter {
    date: string[],
    year: number[],
}

export interface DataGrafik {
    label: string[],
    data: number[],
    color: (opacity: number) => string,
    strokeWidth: number

}