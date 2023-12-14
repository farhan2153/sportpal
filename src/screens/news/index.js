
import { StyleSheet, Text, View, Image, ScrollView,Animated } from 'react-native'
import { SearchNormal } from 'iconsax-react-native'
import { fontType, colors } from '../../theme'
import {BlogList} from '../../../data';
import React,{useRef} from 'react'
import { News1, News2, News3, News4, News5, News6, News7, News8 } from '../../assets'

const News = () => {
  const truncateTextByWords = (text, maxWords) => {
    const words = text.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + ' ...';
    }
    return text;
  }
  const scrollY = useRef(new Animated.Value(0)).current;
    const diffClampY = Animated.diffClamp(scrollY, 0, 142);
    const recentY = diffClampY.interpolate({
        inputRange: [0, 142],
        outputRange: [0, -142],
        extrapolate: 'clamp',
      });
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Animated.ScrollView showsVerticalScrollIndicator={false}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: true },
            )}
            contentContainerStyle={{ paddingTop: 0 }}>
      <Animated.View style={{ padding: 15, flexDirection: 'row', alignItems: 'center',transform: [{translateY: recentY}] }}>
        <Text style={{ fontFamily: fontType['Pjs-Bold'], fontSize: 20, color: 'black' }}>SportPal</Text>
        <View style={{ marginLeft: 225 }}>
          <SearchNormal color={colors.black()} variant="Linear" size={20} />
        </View>
      </Animated.View>
        <View style={{ flexDirection: 'column', gap: 18, padding: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ borderRadius: 20 }} source={News1}></Image>
            <View style={{ flexDirection: 'column', marginLeft: 10}}>
              <View style={{}}>
              <Text style={{ color: 'black', fontFamily: fontType['Pjs-Bold'], fontSize: 13 }}>{truncateTextByWords('Jadwal Liga Inggris Pekan Ini Live di SCTV dan Vidio, 11-12 November 2023', 4)}</Text>
              </View>
              <Text style={{ color: 'black', fontFamily: fontType['Pjs-Regular'], fontSize: 10 }}>{truncateTextByWords('Jadwal siaran langsung Premier League musim 2023/2024 di SCTV pekan ini, 11 hingga 12 November 2023. Siaran langsung Liga Inggris di SCTV pekan ini tidak ada dulu karena berbarengan dengan event Piala Dunia U-17 2023.', 3)}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ borderRadius: 20 }} source={News1}></Image>
            <View style={{ flexDirection: 'column', marginLeft: 10}}>
              <View style={{}}>
              <Text style={{ color: 'black', fontFamily: fontType['Pjs-Bold'], fontSize: 13 }}>{truncateTextByWords('Jadwal Liga Inggris Pekan Ini Live di SCTV dan Vidio, 11-12 November 2023', 4)}</Text>
              </View>
              <Text style={{ color: 'black', fontFamily: fontType['Pjs-Regular'], fontSize: 10 }}>{truncateTextByWords('Jadwal siaran langsung Premier League musim 2023/2024 di SCTV pekan ini, 11 hingga 12 November 2023. Siaran langsung Liga Inggris di SCTV pekan ini tidak ada dulu karena berbarengan dengan event Piala Dunia U-17 2023.', 3)}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ borderRadius: 20 }} source={News1}></Image>
            <View style={{ flexDirection: 'column', marginLeft: 10}}>
              <View style={{}}>
              <Text style={{ color: 'black', fontFamily: fontType['Pjs-Bold'], fontSize: 13 }}>{truncateTextByWords('Jadwal Liga Inggris Pekan Ini Live di SCTV dan Vidio, 11-12 November 2023', 4)}</Text>
              </View>
              <Text style={{ color: 'black', fontFamily: fontType['Pjs-Regular'], fontSize: 10 }}>{truncateTextByWords('Jadwal siaran langsung Premier League musim 2023/2024 di SCTV pekan ini, 11 hingga 12 November 2023. Siaran langsung Liga Inggris di SCTV pekan ini tidak ada dulu karena berbarengan dengan event Piala Dunia U-17 2023.', 3)}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ borderRadius: 20 }} source={News1}></Image>
            <View style={{ flexDirection: 'column', marginLeft: 10}}>
              <View style={{}}>
              <Text style={{ color: 'black', fontFamily: fontType['Pjs-Bold'], fontSize: 13 }}>{truncateTextByWords('Jadwal Liga Inggris Pekan Ini Live di SCTV dan Vidio, 11-12 November 2023', 4)}</Text>
              </View>
              <Text style={{ color: 'black', fontFamily: fontType['Pjs-Regular'], fontSize: 10 }}>{truncateTextByWords('Jadwal siaran langsung Premier League musim 2023/2024 di SCTV pekan ini, 11 hingga 12 November 2023. Siaran langsung Liga Inggris di SCTV pekan ini tidak ada dulu karena berbarengan dengan event Piala Dunia U-17 2023.', 3)}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ borderRadius: 20 }} source={News1}></Image>
            <View style={{ flexDirection: 'column', marginLeft: 10}}>
              <View style={{}}>
              <Text style={{ color: 'black', fontFamily: fontType['Pjs-Bold'], fontSize: 13 }}>{truncateTextByWords('Jadwal Liga Inggris Pekan Ini Live di SCTV dan Vidio, 11-12 November 2023', 4)}</Text>
              </View>
              <Text style={{ color: 'black', fontFamily: fontType['Pjs-Regular'], fontSize: 10 }}>{truncateTextByWords('Jadwal siaran langsung Premier League musim 2023/2024 di SCTV pekan ini, 11 hingga 12 November 2023. Siaran langsung Liga Inggris di SCTV pekan ini tidak ada dulu karena berbarengan dengan event Piala Dunia U-17 2023.', 3)}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ borderRadius: 20 }} source={News1}></Image>
            <View style={{ flexDirection: 'column', marginLeft: 10}}>
              <View style={{}}>
              <Text style={{ color: 'black', fontFamily: fontType['Pjs-Bold'], fontSize: 13 }}>{truncateTextByWords('Jadwal Liga Inggris Pekan Ini Live di SCTV dan Vidio, 11-12 November 2023', 4)}</Text>
              </View>
              <Text style={{ color: 'black', fontFamily: fontType['Pjs-Regular'], fontSize: 10 }}>{truncateTextByWords('Jadwal siaran langsung Premier League musim 2023/2024 di SCTV pekan ini, 11 hingga 12 November 2023. Siaran langsung Liga Inggris di SCTV pekan ini tidak ada dulu karena berbarengan dengan event Piala Dunia U-17 2023.', 3)}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ borderRadius: 20 }} source={News1}></Image>
            <View style={{ flexDirection: 'column', marginLeft: 10}}>
              <View style={{}}>
              <Text style={{ color: 'black', fontFamily: fontType['Pjs-Bold'], fontSize: 13 }}>{truncateTextByWords('Jadwal Liga Inggris Pekan Ini Live di SCTV dan Vidio, 11-12 November 2023', 4)}</Text>
              </View>
              <Text style={{ color: 'black', fontFamily: fontType['Pjs-Regular'], fontSize: 10 }}>{truncateTextByWords('Jadwal siaran langsung Premier League musim 2023/2024 di SCTV pekan ini, 11 hingga 12 November 2023. Siaran langsung Liga Inggris di SCTV pekan ini tidak ada dulu karena berbarengan dengan event Piala Dunia U-17 2023.', 3)}</Text>
            </View>
          </View>
        </View>
      </Animated.ScrollView >
    </View >


  )
}

export default News
