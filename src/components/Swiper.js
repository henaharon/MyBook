import React, {Component} from 'react';
import {Text, View, Image, Dimensions, ImageBackground} from 'react-native';
import Swiper from 'react-native-swiper';
const {width} = Dimensions.get('window');

export default class extends Component {
  render() {
    const scenes = [
      {
        id: 11,
        text: 'Jenny walks with her tiger friend Lila to a new adventure',
        imgSource: require('./img/front_cover_2.png'),
      },
      {
        id: 1,
        text: 'Jenny walks with her tiger friend Lila to a new adventure',
        imgSource: require('./img/1.jpeg'),
      },
      {id: 2, text: 'scene2', imgSource: require('./img/2.jpg')},
      {id: 3, text: 'scene3', imgSource: require('./img/3.jpg')},
      {id: 5, text: 'scene4', imgSource: require('./img/back_side.png')},
    ];

    return (
      <View style={styles.container}>
        <Swiper
          activeDotColor="black"
          style={styles.wrapper}
          height={240}
          onMomentumScrollEnd={(e, state, context) =>
            console.log('index:', state.index)
          }
          loop={false}>
          {scenes.map((scene, index) => {
            if (scene.id === 11 || scene.id === 5) {
              return (
                <ImageBackground
                  key={scene.id}
                  style={{flex: 1}}
                  source={scene.imgSource}
                />
              );
            }
            return (
              <View key={scene.id} style={styles.slide}>
                <View style={styles.imgWrapper}>
                  <Image
                    resizeMode="stretch"
                    style={styles.image}
                    source={scene.imgSource}
                  />
                </View>

                <Text style={styles.text}>{scene.text}</Text>
              </View>
            );
          })}
        </Swiper>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },

  imgWrapper: {
    width: width,
    height: width,
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: 'transparent',
    alignItems: 'center',
  },

  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  image: {
    width: '100%',
    height: '100%',
  },
};
