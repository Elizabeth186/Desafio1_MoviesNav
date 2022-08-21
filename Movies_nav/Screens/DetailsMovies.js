import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Avatar, ListItem } from 'react-native-elements';


const Tab = createBottomTabNavigator();

export default function DetailsMovies({navigation, route}) {
  const {itemID, name, desc} = route.params;
  return (
   <View style={styles.container}>

      <Text style={styles.textstyle}>{itemID}</Text>
      <Text style={styles.titlestyle}>{name}</Text>
      <Text style={styles.titlestyle2}>{desc}</Text>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    marginTop:'10%',
    marginBottom:'8%',
    marginHorizontal:'5%',
  },
  textstyle: {
    color:'#ffffff'
  },
  titlestyle: {
    fontSize:26,
    fontWeight:"bold",
  },
  titlestyle2: {
    marginTop:'2%',
    padding: '4%',
    textAlign:'justify',
  },
  
});
