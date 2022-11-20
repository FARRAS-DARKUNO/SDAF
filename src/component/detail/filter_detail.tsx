import React from "react";
import {
    StyleSheet,
    View,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import { DataFilter } from "../../utils/interface";
import { useDispatch, useSelector } from "react-redux";
import { setMonthValue, setYearValue } from '../../redux/action'

const FilterDetail = (props: DataFilter) => {

    const dispatch = useDispatch()

    const { month, year } = useSelector(
        //@ts-ignore
        state => state.userReducer
    )

    const bulan = ['', 'Januari', 'Februari', 'Maret', "April", "Mei", 'Juni', "Juli", "Agustus", "September", "Oktober", "November", "Desember"]

    return (
        <View style={styles.viewBottom}>
            <SelectDropdown
                data={props.year}
                buttonStyle={styles.buttonSelectYear}
                buttonTextStyle={styles.textButton}
                defaultValue={year}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem)
                    dispatch(setYearValue(selectedItem))
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    return item
                }}
            />

            <SelectDropdown
                data={props.date}
                buttonStyle={styles.buttonSelectMonth}
                buttonTextStyle={styles.textButton}
                defaultValue={bulan[month]}
                onSelect={(selectedItem, index) => {
                    console.log(index)
                    dispatch(setMonthValue(index + 1))
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    return item
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewBottom: {
        height: 30,
        flexDirection: 'row-reverse',
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    buttonSelectYear: {
        width: "27%",
        backgroundColor: '#2F5664',
        borderRadius: 10,
        height: '100%',
        marginRight: 10,
    },
    textButton: {
        fontSize: 13,
        fontFamily: 'Ubuntu-Bold',
        color: '#FFFFFF',
    },
    buttonSelectMonth: {
        width: "48%",
        backgroundColor: '#2F5664',
        borderRadius: 10,
        height: '100%',
        marginRight: 10,
    },
})

export default FilterDetail