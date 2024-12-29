import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './screens/HomeScreen';
import ConvertInchToMM from './screens/module/ConvertInchToMM';
import CurrentTime from './screens/module/CurrentTime';
import ConvertKgToLbs from './screens/module/ConvertKgToLbs';

const Stack = createStackNavigator();
export default function App() {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <StatusBar style='light' backgroundColor='transparent' />
        <NavigationContainer>
          <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{
              headerShown: false
            }}
            />
            <Stack.Screen
            name='ConvertInchToMM'
            component={ConvertInchToMM}
            options={{
              title: 'Convert Inch To MM',
              animation: 'slide_from_right'
            }}
            />
            <Stack.Screen
            name='CurrentTime'
            component={CurrentTime}
            options={{
              headerShown: false,
              animation: 'slide_from_right'
            }}
            />
            <Stack.Screen
            name='ConvertKgToLbg'
            component={ConvertKgToLbs}
            options={{
              title: 'Convert Kg To Lbs',
              animation: 'slide_from_right'
            }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
