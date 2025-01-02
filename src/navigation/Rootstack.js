import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TodoScreen from '../screens/Todoscreen';
import SubmitPage from '../screens/SubmitPage';
import DetailsPage from '../screens/DetailsPage';

const Stack = createStackNavigator();

const RootStack = () => {
    return (
        <Stack.Navigator 
            initialRouteName="TodoScreen"
            screenOptions={{
                headerShown: false, // Disable header for all screens
            }}
        >
            <Stack.Screen name="TodoScreen" component={TodoScreen} />
            <Stack.Screen name="SubmitPage" component={SubmitPage} />
            <Stack.Screen name="DetailsPage" component={DetailsPage} />
        </Stack.Navigator>
    );
};

export default RootStack;