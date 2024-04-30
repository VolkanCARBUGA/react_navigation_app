import React, { useState } from 'react'
import { SafeAreaView,Alert } from 'react-native';
import Input from '../components/Input/Input';

import Button from '../components/Button/button';
function MemberSignIn({navigation}) {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    function handleSubmit() {
        if (!name || !surname || !age || !email) {
            Alert.alert("Kebab Fitness", "Bos alan bırakmayınız", [
                { text: "OK" ,
                    onPress: () => console.log("OK Pressed")
            },
                { text: "Cancel" ,
                    onPress: () => console.log("Cancel Pressed")
            }
            ])
            return;
           
        }
        const member = { name, surname, age, email };
        navigation.navigate('MemberResult', {member}); 
        

        

       
    }
    return (
        <SafeAreaView style={{ margin: 10, padding: 10, justifyContent: 'center' }}>
            <Input label={"Kullanıcı Adı"} placeholder={"Kullanıcı Adını giriniz"} onChangeText={setName} />
            <Input label={"Kullanıcı Soyadı"} placeholder={"Kullanıcı Soyadını giriniz"} onChangeText={setSurname} />
            <Input label={"Kullanıcı Yaşı"} placeholder={"Kullanıcı Yaşını giriniz"} onChangeText={setAge} />
            <Input label={"Kullanıcı Emaili"} placeholder={"Kullanıcı Emailini giriniz"} onChangeText={setEmail} />
            <Button text="Kayıt Ol" onPress={handleSubmit} />
        </SafeAreaView>
    )

}
export default MemberSignIn
