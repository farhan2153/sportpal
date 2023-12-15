import { StyleSheet, Text, View,Animated,TouchableOpacity,ActivityIndicator,Modal } from 'react-native'
import React, {useState, useRef, useEffect} from 'react';
import {ArrowLeft, Like1, Receipt21, Message, Share, More} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {formatNumber} from '../../utils/formatNumber';
import {formatDate} from '../../utils/formatDate';
import axios from 'axios';
const PostDetail = ({route}) => {
  const {postId} = route.params;
  const [iconStates, setIconStates] = useState({
    liked: {variant: 'Linear', color: 'gray'},
    bookmarked: {variant: 'Linear', color: 'gray'},
  });
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const actionSheetRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const openActionSheet = () => {
    actionSheetRef.current?.show();
  };
  const closeActionSheet = () => {
    actionSheetRef.current?.hide();
  };
  useEffect(() => {
    getPostById();
  }, [postId]);
  const getPostById = async () => {
    try {
      const response = await axios.get(
        `https://656a074bde53105b0dd80c76.mockapi.io/myloco/post/${postId}`,
      );
      setSelectedPost(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  const navigateEdit = () => {
    closeActionSheet()
    navigation.navigate('PostEdit', {postId})
  }
  const handleDelete = async () => {
   await axios.delete(`https://656a074bde53105b0dd80c76.mockapi.io/myloco/post/${postId}`)
      .then(() => {
        closeActionSheet()
        navigation.navigate('Profile');
      })
      .catch((error) => {
        console.error(error);
      });
  }
  const navigation = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 52);
  const headerY = diffClampY.interpolate({
    inputRange: [0, 52],
    outputRange: [0, -52],
  });
  const bottomBarY = diffClampY.interpolate({
    inputRange: [0, 52],
    outputRange: [0, 52],
  });
  const toggleIcon = iconName => {
    setIconStates(prevStates => ({
      ...prevStates,
      [iconName]: {
        variant: prevStates[iconName].variant === 'Linear' ? 'Bold' : 'Linear',
        color:
          prevStates[iconName].variant === 'Linear'
            ? 'blue'
            : 'gray',
      },
    }));
  };
  return (
<View style={styles.container}>
      <Animated.View
        style={[styles.header, {transform: [{translateY: headerY}]}]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color='gray' variant="Linear" size={24} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'center', gap: 20}}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <More
              color='gray'
              variant="Linear"
              style={{transform: [{rotate: '90deg'}]}}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>
      {loading ? (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <ActivityIndicator size={'large'} color='blue' />
        </View>
      ) : (
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true},
          )}
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingTop: 62,
            paddingBottom: 54,
          }}>
          <FastImage
            style={styles.image}
            source={{
              uri: selectedPost?.image,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}></FastImage>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 15,
            }}>
            <Text style={styles.date}>
              {formatDate(selectedPost?.createdAt)}
            </Text>
          </View>
          <Text style={styles.title}>{selectedPost?.title}</Text>
          <Text style={styles.description}>{selectedPost?.description}</Text>
        </Animated.ScrollView>
      )}
      <Animated.View
        style={[styles.bottomBar, {transform: [{translateY: bottomBarY}]}]}>
        <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
          <TouchableOpacity onPress={() => toggleIcon('liked')}>
            <Like1
              color={iconStates.liked.color}
              variant={iconStates.liked.variant}
              size={24}
            />
          </TouchableOpacity>
          <Text style={styles.info}>
            {formatNumber(selectedPost?.totalLikes)}
          </Text>
        </View>
        <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
          <Message color='gray' variant="Linear" size={24} />
          <Text style={styles.info}>
            {formatNumber(selectedPost?.totalComments)}
          </Text>
        </View>
        <TouchableOpacity onPress={() => toggleIcon('bookmarked')}>
          <Receipt21
            color={iconStates.bookmarked.color}
            variant={iconStates.bookmarked.variant}
            size={24}
          />
        </TouchableOpacity>
      </Animated.View>
      <Modal
      animationType='fade'
      transparent={true}
      visible={modalVisible}
      style={{}}
      onRequestClose={() =>{
        setModalVisible(!modalVisible);
      }}>
        <View style={{backgroundColor: 'white',position:'absolute', padding: 20,top: 50, paddingHorizontal: 40,borderRadius: 10,left: 260,paddingVertical: 20}}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={navigateEdit}
          >
          <Text
            style={{
              fontFamily: 'SquadaOne-Regular',
              color: 'black',
              fontSize: 18,
            }}>
            Edit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={handleDelete}>
          <Text
            style={{
              fontFamily: 'SquadaOne-Regular',
              color: 'black',
              fontSize: 18,
            }}>
            Delete
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={() => setModalVisible(!modalVisible)}>
          <Text
            style={{
              fontFamily: 'SquadaOne-Regular',
              color: 'red',
              fontSize: 18,
            }}>
            Cancel
          </Text>
        </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}
export default PostDetail
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    paddingTop: 8,
    paddingBottom: 4,
    position: 'absolute',
    zIndex: 1000,
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: 'white',
  },
  bottomBar: {
    position: 'absolute',
    zIndex: 1000,
    backgroundColor: 'white',
    paddingVertical: 14,
    paddingHorizontal: 60,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 250,
    width: 'auto',
    borderRadius: 10,
  },
  info: {
    color: 'gray',
    fontFamily: 'SquadaOne-Regular',
    fontSize: 12,
  },
  date: {
    color: 'gray',
    fontFamily: 'SquadaOne-Regular',
    fontSize: 15,
  },
  title: {
    fontSize: 24,
    fontFamily: 'SquadaOne-Regular',
    color: 'black',
    marginTop: 10,
  },
  description: {
    color: 'gray',
    fontFamily: 'SquadaOne-Regular',
    fontSize: 18,
    lineHeight: 20,
    marginTop: 15,
  },
})
