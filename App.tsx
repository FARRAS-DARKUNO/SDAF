import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// page
import BerandaPage from './src/page/beranda_page';
import DetailPage from './src/page/detail_page';
import LoginPage from './src/page/login_page';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <Provider store={Store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="BerandaPage" component={BerandaPage} /> */}
        {/* <Stack.Screen name="DetailPage" component={DetailPage} /> */}
        <Stack.Screen name="LoginPage" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
    // </Provider>
  );
};



export default App;
