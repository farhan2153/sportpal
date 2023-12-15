import { StyleSheet, Text, View, ScrollView,Image,TouchableOpacity,RefreshControl,ActivityIndicator,Animated } from 'react-native'
import React, {useState,useCallback,useRef} from 'react'
import {useNavigation,useFocusEffect} from '@react-navigation/native';
import { Category, DirectSend, SearchNormal } from 'iconsax-react-native';
import {PostItem} from '../../components'
import axios from 'axios';
import { fontType,colors } from '../../theme';
const News = () => {
  const navigation = useNavigation();
  const handleNavigateToSettings = () => {
    navigation.navigate('Settings');
  };
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const getDataPost = async () => {
    try {
      const response = await axios.get(
        'https://657be813394ca9e4af14f822.mockapi.io/sportpalapp/blog',
      );
      setBlogData(response.data);
      setLoading(false)
    } catch (error) {
        console.error(error);
    }
  };
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      getDataPost()
      setRefreshing(false);
    }, 1500);
  }, []);
  useFocusEffect(
    useCallback(() => {
      getDataPost();
    }, [])
  );
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 142);
  const recentY = diffClampY.interpolate({
    inputRange: [0, 142],
    outputRange: [0, -142],
    extrapolate: 'clamp',
  });
  return (
    <View>
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        gap: 10,
        paddingBottom: 90,
      }} refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        <Animated.View style={{ padding: 15, flexDirection: 'row', alignItems: 'center', transform: [{ translateY: recentY }] }}>
          <Text style={{ fontFamily: fontType['Pjs-Bold'], fontSize: 20, color: 'black' }}>SportPal</Text>
          <View style={{ marginLeft: 225 }}>
            <SearchNormal color={colors.black()} variant="Linear" size={20} />
          </View>
        </Animated.View>
          <View style={events.container}>    
            <View style={events.content}>
              {loading ? (
                <ActivityIndicator size={'large'} color={'black'}/>
              ) : (
                blogData.map((item, index) => <PostItem item={item} key={index}/>)
              )}
            </View>
          </View>
    </ScrollView>
    <TouchableOpacity style={styles.floatingButton}
    onPress={() => navigation.navigate("AddBlogForm")}>
        <DirectSend size="32" color="white"/>
    </TouchableOpacity>
    </View>
  )
}
export default News
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2D2C2C',
    flexDirection: 'column',
  },
  title: {
    fontFamily: 'SquadaOne-Regular',
    fontSize: 24,
    marginHorizontal: 20,
    marginVertical: 30,
    textAlign: 'center',
    color: 'white'
  },
  image: {
    width: 120,
    height: 120,
    marginVertical: 10,
    borderRadius: 100,
    resizeMode: 'contain',
  },
  profileBar: {
    marginVertical: 10,
    flexDirection: 'column',
    alignItems: 'center'
  },
  profileName: {
    marginVertical: 14,
  },
  profileBadge: {
    marginHorizontal: 4,
    borderRadius: 40,
    alignContent: 'center',
    backgroundColor: 'white'
  },
  titleBadge: {
    marginHorizontal:15,
    marginVertical: 10,
    fontFamily: 'SquadaOne-Regular',
    fontSize: 16,
  },
  profileTitle: {
    fontSize: 28,
    fontFamily: 'SquadaOne-Regular'
  },
  iconGear: {
    marginHorizontal: 4,
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    fontFamily: 'SquadaOne-Regular',
    marginHorizontal: 14,
  }, 
  statusProfile: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginVertical: 15,
  },
  statusFollow: {
    flexDirection: 'column'
  },
  profileValue: {
    fontFamily: 'SquadaOne-Regular',
    fontSize: 18,
    textAlign: 'center'
  },
  floatingButton: {
    backgroundColor: '#2D2C2C', 
    padding: 20,
    position: 'absolute',
    top: 550,
    right: 24,
    borderRadius: 40,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  }
})
const events = StyleSheet.create({
  container:{
    flexDirection: 'column',
    marginVertical: 10,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent:'center'
  },
  image: {
    width: 128,
    height: 128,
    marginHorizontal: 1,
    marginVertical: 1,
    borderRadius: 5,
    resizeMode: 'contain',
  },
})