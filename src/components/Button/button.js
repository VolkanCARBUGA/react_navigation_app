import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import style from './ButtonStyle';
const Button=({text,onPress}) => {

    return (
        <TouchableOpacity
            style={style.button}
            onPress={onPress}
        >
            <Text
                style={style.text}
            >
                {text}
            </Text>
        </TouchableOpacity>
    );
}
export default Button
