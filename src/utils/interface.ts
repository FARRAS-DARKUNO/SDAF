import React from "react";

export type ReactSetter<T> = React.Dispatch<React.SetStateAction<T>>;
export interface DataContain {
    name: string,
    value: number | string,
    type: string | null,
    link : string,
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

export interface DataAvarage {
    date: any,
    value: any
}

export interface SizeImage {
    size: number
}
