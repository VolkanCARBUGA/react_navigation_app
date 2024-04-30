import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from './pages/Welcome';
import Member from './pages/MemberSignIn';
import MemberResult from './pages/MemberResult';


const Stack = createNativeStackNavigator();
function App() {
  return(
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Welcome Screen" component={Welcome} />
        <Stack.Screen name="MemberSignIn" component={Member} />
        <Stack.Screen name="MemberResult" component={MemberResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}

export default App
