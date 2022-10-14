import React from "react";
import {
    StyleSheet,
    View,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import { DataFilter } from "../../utils/interface";

const FilterDetail = (props: DataFilter) => {
    return (
        <View style={styles.viewBottom}>
            <SelectDropdown
                data={props.year}
                buttonStyle={styles.buttonSelectYear}
                buttonTextStyle={styles.textButton}
                defaultValue={props.year[0]}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
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
                defaultValue={props.date[0]}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
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