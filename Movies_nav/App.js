import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screens/Home';
import Navigationmovies from './NavigationMoviesStack/NavigationMovies';

const Tab = createBottomTabNavigator();

export default function navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName={'Critic'}
      tabBarOptions={{
         activeTintColor: 'white',
         inactiveTintColor: 'black',
         activeBackgroundColor: '#0C3559',
         inactiveBackgroundColor: '#ffffff',
             style: {
                   backgroundColor: '#CE4418',
                   paddingBottom: 3
             }
      }}>
        <Tab.Screen name="Home" component={Home} 
        //Agregando estilo a la parte superiro de tab//
        options={{headerStyle: {backgroundColor: '#0D0D0D'},
        headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}} />
        <Tab.Screen name="Movies" component={Navigationmovies} 
        options={{headerStyle: {backgroundColor: '#0D0D0D'},
        headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
