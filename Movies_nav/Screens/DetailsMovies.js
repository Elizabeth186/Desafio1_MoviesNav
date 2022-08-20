import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

export default function DetailsMovies({navigation}) {
  return (
    <View style={styles.container}>
      <Text>holis</Text> 
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C3559',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
