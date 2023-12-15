import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';
import {formatDate} from '../../utils/formatDate';
import FastImage from 'react-native-fast-image';
const PostItem  = ({item}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
        onPress={() => navigation.navigate('PostDetail', {postId: item.id})}>
            <FastImage style={styles.image}
            source={{uri: item?.image,
            headers:{Authorization: 'someAuthToken'},
            priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}/>
            <Text style={{color: 'black'}}>{item?.title}</Text>
        </TouchableOpacity>
    )
}
export default PostItem

const styles = StyleSheet.create({
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
