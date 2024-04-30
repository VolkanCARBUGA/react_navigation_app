import React from 'react'
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';

function MemberResult({ route }) {

    const { member } = route.params;

    return (
        <SafeAreaView style={{ margin: 10, padding: 10, justifyContent: 'center' }}>
            <Text style={style.header}>Member Result</Text >
            <View>
                <Text style={style.label}>Üye Adı: {member.name}</Text >
                <Text style={style.label}>Üye Soyadı:{member.surname} </Text >
                <Text style={style.label}>Üye Yası:{member.age} </Text >
                <Text style={style.label}>Üye Emaili:{member.email} </Text >
            </View>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    label: {
        fontSize: 25,
        margin: 10,
        fontWeight: 'bold',
        fontFamily: 'Courier New',

        color: 'grey',
    },
    header: {
        fontSize: 30,
        margin: 10,
        fontWeight: 'bold',
        fontFamily: 'Consolas',
        textAlign: 'center',
        color: 'black',
    },

})
export default MemberResult