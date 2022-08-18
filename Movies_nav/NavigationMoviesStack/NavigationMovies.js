import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsMovies from '../Screens/DetailsMovies';
import ListMovies from '../Screens/ListMovies';

const Stack = createNativeStackNavigator();
export default function Navigationmovies() {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="Estrenos" component={ListMovies} />
        <Stack.Screen name="Detalles" component={DetailsMovies} />
      </Stack.Navigator>
    
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
