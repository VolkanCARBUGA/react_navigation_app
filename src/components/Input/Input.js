import React from 'react'
import { View, Text, TextInput } from 'react-native'
import style from './InputStyle';
function Input({ label,onChangeText,placeholder}) {
    return (
        <View style={style.container}>
            <Text style={style.label}>{label}</Text>
            <View style={style.input}>
                <TextInput placeholder={placeholder}onChangeText={onChangeText}></TextInput>
            </View>

        </View>
    );
}
export default Input