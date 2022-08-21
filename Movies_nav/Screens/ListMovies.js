import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Avatar, ListItem } from 'react-native-elements';


const movies = [
    {
    name: 'Bob',
    image: 'https://es.web.img3.acsta.net/medias/nmedia/18/89/75/07/20065183.jpg',
    time: '2h',
    categoria: 'Familiar',
    descripcion:'Bob toronja. En esta película, Plankton diseña un plan para desacreditar a su némesis de negocios, Don Cangrejo, robar la fórmula secreta de la Cangreburguer y conquistar el mundo robando la corona del Rey Neptuno y enmarcando a Don Cangrejo por el crimen.'
    },
    {
        name: 'The Hateful Eight',
        image: 'https://upload.wikimedia.org/wikipedia/en/d/d4/The_Hateful_Eight.jpg',
        time: '2h 40m',
        categoria: 'Western',
        descripcion:'The Hateful Eight (Los odiosos ocho en España y Los ocho más odiados en Hispanoamérica) es una película estadounidense escrita y dirigida por Quentin Tarantino, estrenada en Estados Unidos en 2015. Se trata de un western que mezcla elementos de cine de misterio y comedia negra.'
        },
        {
          name: '1917',
          image: 'https://es.web.img3.acsta.net/pictures/20/01/09/15/10/0234685.jpg',
          time: '1h 59m',
          categoria: 'Guerra/Drama',
          descripcion:'1917 cuenta la historia de dos jóvenes soldados británicos en plena guerra, el cabo Schofield (GEORGE MacKAY) y el cabo Blake (DEAN-CHARLES CHAPMAN) a los que se les encomienda una tarea aparentemente imposible.'
          },
          {
            name: 'Top Gun: Maverick',
            image: 'https://m.media-amazon.com/images/M/MV5BOWQwOTA1ZDQtNzk3Yi00ZmVmLWFiZGYtNjdjNThiYjJhNzRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg',
            time: '2h 11m',
            categoria: 'Accion/Aventura',
            descripcion:'Top Gun: Maverick (comúnmente llamada Top Gun 2: Maverick) es una película de acción y drama estadounidense de 2022 dirigida por Joseph Kosinski, secuela de la película de 1986 Top Gun. Se estrenó el 27 de mayo de 2022 en Estados Unidos. Tras más de treinta años de servicio como uno de los mejores aviadores de la Armada, Pete “Maverick” Mitchell (Tom Cruise) está en su casa, forzando los límites como valiente piloto de pruebas y esquivando el ascenso de rango que le dejaría en tierra.'
            },
            {
              name: 'Bullet Train',
              image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bullet-train-757922812-large-1654676084.jpg',
              time: ' 2h 6m',
              categoria: 'Accion, Comedia',
              descripcion:'Cinco asesinos se encuentran en un tren bala japonés, percatándose de que sus tareas individuales están entrelazadas. Bullet Train (Tren Bala) sin duda es la película de acción que todos debemos tener en la mira, especialmente porque el proyecto David Leitch parece ser uno más de los que busca incluir a tantos actores de Hollywood y celebridades como sea posible. Bullet Train es un divertido y delirante thriller de acción del director de Deadpool 2, David Leitch. Brad Pitt encabeza un elenco de asesinos eclécticos y diversos – todos ellos conectados por unos objetivos conflictivos – dentro de un viaje sin escalas por el Japón moderno.'
              },
              {
                name: 'Liga de la Justicia de Zack Snyder',
                image: 'https://static.wikia.nocookie.net/dcextendeduniverse/images/c/ca/ZSJL_-_Official_Poster.png/revision/latest?cb=20210302192043&path-prefix=es',
                time: '4 h',
                categoria: 'Comics, Accion',
                descripcion:'Zack Snyder’s Justice League es la versión del director de la película Justice League de 2017. A diferentecia de la primera versión está rendrá un duración mayor, añadirá mucho contenido que quedó fuera del corte para cines y respetará la visión que el director concibió originalmente antes que diversos problemas, tanto personales como con el estudio, lo apartaran de la silla del director. Su estreno está previsto para el día 18 de marzo 2021 por el servicio de streaming HBO Max. Está clasificada para mayores de 18 años y tendrá una duración de 4 horas.'
                },
]

export default function ListMovies({navigation}) {
  return (
    <View style={styles.container}>
       
    <ScrollView style={styles.scroll_container}>
            <View >
            {
              movies.map((movi, i) => (
                <ListItem key={i} bottomDivider onPress={() => navigation.navigate("Details", {itemID: i, name:movi.name, desc: movi.descripcion })}>
                  <Avatar size="xlarge" source={{uri: movi.image}}></Avatar>
                  <ListItem.Content>
                    <ListItem.Title styles={styles.titlestyle}>{movi.name}</ListItem.Title>
                    <ListItem.Subtitle >{movi.time}</ListItem.Subtitle>
                    <ListItem.Subtitle>{movi.categoria}</ListItem.Subtitle>
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
    backgroundColor: '#0C3559',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll_container:{
    width:'100%',
    backgroundColor: '#5F9EA0',
  },
  titlestyle:{
    fontSize: 26,
    fontWeight:"bold",
  }
});
