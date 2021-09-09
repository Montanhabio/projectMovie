import React, { useState, useRef } from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions, ImageBackground, 
  TextInput, TouchableOpacity, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import Icon from 'react-native-vector-icons/MaterialIcons';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default function App() {
  const carouselRef = useRef(null);

  const [lista, setLista] = useState([
    {
        title:"Jurassic Park",
        text: "In Jurassic World: Threatened Kingdom, three years after the closing of Jurassic Park, a volcano about to erupt puts life on Nublar Island at risk",
        release: 2018,
        img: 'https://br.web.img3.acsta.net/pictures/18/04/18/17/25/4723738.jpg'
    },
    {
        title:"IT",
        text: "The Thing, a group of seven teenagers from Derry, a town in Maine, form the self-titled Losers Club - the club of losers.",
        release: 2018,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa5TQyqHzEieK5NmJ_hzMgT0etfviY91ieKEDoLZR_9ROR6S5tb_2J-H-GdcvxV-V4Z4k&usqp=CAU'
    },
    {
        title:"Star Wars - Episod I",
        text: "The order is threatened in the Galactic Republic by a conflict between the Trade Federation and the planet Naboo",
        release: 1999,
        img: 'https://upload.wikimedia.org/wikipedia/pt/3/30/Star_Wars_Epis%C3%B3dio_1_Amea%C3%A7a_Fantasma.jpg'
    },
    {
        title:"Jumanji - Welcome to the jungle",
        text: "Four teenagers in detention discover an old video game console with a game they’ve never heard of.",
        release: 2017,
        img: 'https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/jumanji-welcome-to-the-jungle_rating.jpg?itok=uaeK2rbI'
    },
    {
        title:"Babylon A.D.",
        text: "In a dystopian[6] 2027, Russian mobster Gorsky (Depardieu) hires the mercenary Toorop (Diesel) to bring a young woman known only as Aurora (Thierry) from Europe to New York City",
        release: 2008,
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Babylon_AD_poster.jpg/220px-Babylon_AD_poster.jpg'
    },
    {
        title:"Me, Myself & Irene",
        text: "Jim Carrey plays Charlie, a highway patrolman who is humiliated by the population after his wife betrayed him on their wedding day, leaving him three children with another man.",
        release: 2000,
        img: 'https://media.fstatic.com/6eDiA91rqQjW2lKRoTlaAApQfYI=/290x478/smart/media/movies/covers/2015/01/eu-eu-mesmo-e-irene_t2629_1DaBHlw.jpg'
    },
  ]);
  const [background, setBackground] = useState(lista[0].img);
  const [activeIndex, setActiveIndex] = useState(0);

  const _renderItem = ({ item, index }) => {
    return(
      <View>
        <TouchableOpacity>
          <Image
          source={{uri: item.img}}
          style={styles.carouselImg}
          />
          <Text style={styles.carouselText}>{item.title}</Text>
          <Icon 
          name="play-circle-outline" 
          size={30} color="#FFF" 
          style={styles.carouselIcon} 
          />
        </TouchableOpacity>
      </View>
    );
  };

 return (
   <ScrollView style={styles.container}>
     <View style={{flex:1, height: screenHeight}}>
        <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>  
          <ImageBackground
          source={{ uri: background}}
          style={styles.imgBg}
          blurRadius={8}
          >

            <View style={styles.viewSearch}>
              <TextInput
                style={styles.input}
                placeholder="Search Movie"
              />
              <TouchableOpacity style={styles.icon}>
                <Icon name="search" color="#000" size={25} />
              </TouchableOpacity>
            </View>

            <Text 
            style={{color: '#FFF', fontSize: 25, fontWeight: 'bold', 
            marginLeft: 10, marginVertical: 10, }}
            >
              Release
            </Text>

            <View style={styles.slideView}>
              <Carousel
              style={styles.carousel}
              ref={carouselRef}
              data={lista}
              renderItem={_renderItem}
              sliderWidth={screenWidth}
              itemWidth={200}
              inactiveSlideOpacity={0.5}
              onSnapToItem={ (index) => {
                setBackground(lista[index].img);
                setActiveIndex(index);
              }}
              />
            </View>

            <View style={styles.moreInfo}>
              <View style={{marginTop: 10}}>
                <Text style={styles.movieTitle}>{lista[activeIndex].title}</Text>
                <Text style={styles.movieDesc}>{lista[activeIndex].text}</Text>
              </View>
              <TouchableOpacity 
              style={{ marginRight: 15, marginTop: 10 }} 
              onPress={() => alert('CLICOU')}
              >
                <Icon 
                name="queue" 
                color="#131313" 
                size={30} 
                />
              </TouchableOpacity>
            </View>

          </ImageBackground>
        </View>
     </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  imgBg:{
    flex:1,
    width: null,
    height: null,
    opacity: 1,
    justifyContent: "flex-start",
    backgroundColor: '#000'
  },
  viewSearch:{
    marginTop: 20,
    backgroundColor: '#FFF',
    elevation: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center'
  },
  input:{
    width: '90%',
    padding: 13,
    paddingLeft: 20,
    fontSize: 17,
  },
  icon:{
    position: 'absolute',
    right: 20,
    top: 15,
  },
  slideView:{
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center'
  },
  carousel:{
    flex:1,
    overflow: 'visible'
  },
  carouselImg:{
    alignSelf: 'center',
    width: 200,
    height: 300,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  carouselText:{
    padding: 15,
    color: '#FFF',
    position: 'absolute',
    bottom: 10,
    left: 2,
    fontWeight: 'bold'
  },
  carouselIcon:{
    position:'absolute',
    top: 15,
    right: 15,
  },
  moreInfo:{
    backgroundColor: '#FFF',
    width: screenWidth,
    height: screenHeight,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  movieTitle:{
    paddingLeft: 15,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#131313',
    marginBottom: 5,
  },
  movieDesc:{
    paddingLeft: 15,
    color: '#131313',
    fontSize: 14,
    fontWeight: 'bold'
  }
});