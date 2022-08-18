import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Avatar, ListItem } from 'react-native-elements';


const movies = [
    {
    name: 'Bob',
    image: 'https://es.web.img3.acsta.net/medias/nmedia/18/89/75/07/20065183.jpg',
    time: '2 h',
    categoria: 'Familiar',
    descripcion:'jdkejfejfer'
    },
    {
        name: 'Bob',
        image: '',
        time: '2 h',
        categoria: 'Familiar',
        descripcion:'jdkejfejfer'
        },
]

export default function ListMovies({navigation}) {
  return (
    <View style={styles.container}>
       
    <ScrollView style={styles.scroll_container}>
            <View>
            {
              movies.map((movi, i) => (
                <ListItem key={i} bottomDivider onPress={() => navigation.navigate("Detalles")}>
                  <Avatar rounded source={{uri: movi.image}}></Avatar>
                  <ListItem.Content>
                    <ListItem.Title>{movi.name}</ListItem.Title>
                    <ListItem.Subtitle>{movi.time}</ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              ))
            }
            </View>
        </ScrollView>

    
    </View>
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
