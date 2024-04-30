import React from 'react';
import {  Text, SafeAreaView, StyleSheet} from 'react-native';
import Button from '../components/Button/button';

function Welcome({navigation}) {
    function goToMemberSignIn() {
        navigation.navigate('MemberSignIn');
    }
    return (
        <SafeAreaView style={style.container}>
            <Text style={style.heeader}> Kebab Fitness Salonu </Text>
            <Button text="Üye Kaydı oluştur" onPress={goToMemberSignIn}/>
        </SafeAreaView>
    )
    
}
const style = StyleSheet.create({
    container: {
        flex: 1,
      
        alignItems: 'center', 
        justifyContent: 'center',
    },
    heeader: {
        fontSize: 25,
        margin: 10,
        fontWeight: 'bold',
        fontFamily: 'Courier New',
        textAlign: 'center',
        color: 'black',
    },
})

export default Welcome