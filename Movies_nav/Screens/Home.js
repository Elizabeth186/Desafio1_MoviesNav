import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';



export default function Home({navigation}) {

  
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Bienvenido</Text>
      <Text style={styles.TextStyle}>RESPONDE</Text>
      <Text style={styles.TextStyle}>Responde la trivia diaria y al acumular 10 respuestas seguidas podras
      disfrutar un dia totalmente gratis de nuestro catalogo premium Full HD</Text>

      <Image style={styles.styleimage} source={{uri:'https://occ-0-2568-2433.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABSlz36N6atVg2MN7LSSyCJGSJlnHhnCIZMDhcyxv_2esdiTobb8UTWJaIILTuiVFHl80j76x139nrBIqZpOxYPrjcikxf2MNQvfk.jpg?r=071'}}/>
      <Text style={styles.Textanswer}>¿En que año se estreno la pelicula Spirit el corcel indomable?</Text>

      <TouchableOpacity style={styles.touch} onPress={() => {
    alert('Respuesta registrada');
  }}><Text style={styles.Texttouch} >2000</Text></TouchableOpacity>
      <TouchableOpacity style={styles.touch} onPress={() => {
    alert('Respuesta registrada');
  }}><Text style={styles.Texttouch}>2001</Text></TouchableOpacity>
      <TouchableOpacity style={styles.touch} onPress={() => {
    alert('Respuesta registrada');
  }}><Text style={styles.Texttouch} >2002</Text></TouchableOpacity>

      
   
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8DC',
    alignItems: 'center',
    
    
  },
  Title:{
    color: '#262626',
    fontSize: 30,
    marginTop: 15
  },
  TextStyle: {
    color: '#808080',
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10,
    textAlign:'center'
  },
  Texttouch: {
    color: '#ffffff',
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10,
    textAlign:'center',
    fontWeight: 'bold',
    fontSize: 13,
    borderWidth: 5,
    height: '90%',
    marginTop: 3
  },
styleimage:{
  width: 200,
  height:200
},
Textanswer:{
  color:'#808080',
  fontWeight: 'bold',
  marginBottom: 10
},
touch:{
  backgroundColor:'black',
  width: '70%',
  height: '5%',
  borderRadius: 10,
  marginTop: 20,
  borderColor: 'white',
  borderWidth: 1,
  borderColor: '#D9A566'
},
touchenviar:{
  backgroundColor:'#D9A566',
  width: '50%',
  height: '6%',
  borderRadius: 10,
  marginTop: 20,
  borderColor: 'white',
  border: 2 
},


});
