import {ScrollView, StyleSheet,  Text, View, Image, ImageBackground} from 'react-native';
import {Receipt21, PlayCircle} from 'iconsax-react-native';
import { fontType, colors } from '../../theme';
import {GetStart, Barcelona, RealMadrid} from '../../assets'
import {Live,Laliga} from '../../assets'
import React from 'react';

export default function Home(){
    return (
        <View style={styles.container}>
      <ScrollView>
      <View style={styles.listBlog}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          >
          <View style={{...itemHorizontal.cardItem}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              source={GetStart}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    La Liga
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
        
      </View>
      <View style={styles.live}>
        <Text style={category.Heading}>Teratas</Text>
        <View style={styles.livegrup}>
          <Live/>
          <Text style={styles.text}>LIVE</Text>
        </View>
        
      </View>
      
      <View style={styles.listCategory}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{...category.item, marginLeft: 24}}>
            <Text style={{...category.title, color: colors.darkModeBlue()}}>
              Populer
            </Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>FootBall</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Statistik & Analisis</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>E-Sport</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Voley Ball</Text>
          </View>
          <View style={{...category.item, marginRight: 24}}>
            <Text style={category.title}>Report</Text>
          </View>
        </ScrollView>
      </View>
    <View style={itemVertical.cardkolom1}>
      <View style={itemVertical.cardItem}>
        <Laliga/>
        <Text style={itemVertical.judul}>La Liga</Text>
      </View>  
      <View style={itemVertical.cardkolomlogogrup}>
        
      <View style={itemVertical.cardkolomlogo}>
              <Image
                style={itemVertical.cardlogo}
                source={Barcelona}/>
                <Text style={itemVertical.cardText}>Barcelona</Text>  
      </View>
      <Text style={itemVertical.cardskor}>10 - 0</Text>
      <View style={itemVertical.cardkolomlogo}>
      <Image
                style={itemVertical.cardlogolawan}
                source={RealMadrid}/>
                <Text style={itemVertical.cardtextlawan}>Real Madrid</Text>
      </View>
      
      </View>
      <View style={styles.badgeContainer}>
            <View style={styles.badge}>
                    <Text style={category.title}>H      2.12</Text>
            </View>
            <View style={styles.badge}>
                    <Text style={category.title}>D      0.12</Text>
            </View>
            <View style={styles.badge}>
                    <Text style={category.title}>A      7.12</Text>
            </View>
      </View>
      
    </View>
    
        
        </ScrollView>
    </View>
      )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white(),
    },
    header: {
      paddingHorizontal: 24,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      height:52,
      elevation: 8,
      paddingTop:8,
      paddingBottom:4
    },
    title: {
      fontSize: 20,
      fontFamily: fontType['Pjs-ExtraBold'],
      color: colors.black(),
    },
    listCategory: {
      paddingVertical: 10,
    },
    listBlog: {
      marginBottom: 15,
      gap: 10,
    },
    live: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 20,
    },
    livegrup:{
      flexDirection: 'row',
      alignItems:'center',
    },
    text:{
      fontSize: 20,
      fontFamily: fontType['Pjs-ExtraBold'],
      color: '#252525',
      marginLeft: 5,
    },
    badge: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 25,
      alignItems: 'center',
      backgroundColor: colors.grey(0.08),
      marginHorizontal:5,
    },
    badgeContainer: {
        paddingVertical: 10,
        flexDirection: 'row',
        marginHorizontal: 15,
        gap: 20,
    }
  });
  const category = StyleSheet.create({
    item: {
      paddingHorizontal: 14,
      paddingVertical: 10,
      borderRadius: 25,
      alignItems: 'center',
      backgroundColor: colors.grey(0.08),
      marginHorizontal:5
    },
    title: {
      fontFamily: fontType['Pjs-SemiBold'],
      fontSize: 14,
      lineHeight: 18,
      color: colors.grey(),
    },
    Heading: {
      fontSize: 20,
      fontFamily: fontType['Pjs-ExtraBold'],
      color: '#252525',
    }
  })
  const itemVertical = StyleSheet.create({
    listCard: {
      paddingHorizontal: 24,
      paddingVertical: 10,
      gap: 15,
    },
    cardItem: {
      backgroundColor: colors.blue(0.03),
      flexDirection: 'row',
      borderRadius: 10,
      justifyContent:'center',
    },
    cardCategory: {
      color: colors.blue(),
      fontSize: 10,
      fontFamily: fontType['Pjs-SemiBold'],
    },
    cardTitle: {
      fontSize: 14,
      fontFamily: fontType['Pjs-Bold'],
      color: colors.black(),
    },
    cardText: {
      fontSize: 20,
      fontFamily: fontType['Pjs-Medium'],
      justifyContent:'center',
      color: colors.blue(0.6),
    },
    cardImage: {
      width: 94,
      height: 94,
      borderRadius: 10,
      resizeMode: 'cover',
    },
    cardInfo: {
      flexDirection: 'row',
      gap: 5,
      alignItems: 'center',
    },
    cardContent: {
      gap: 10,
      justifyContent: 'space-between',
      paddingRight: 10,
      paddingLeft: 15,
      flex: 1,
      paddingVertical: 10,
    },
    judul:{
      fontSize: 15,
      fontFamily: fontType['Pjs-Medium'],
      color: '#252525',
      justifyContent:'center',
    },
    cardkolom1:{
      flexDirection:'column',
    },
    cardkolomlogo:{
      flexDirection:'column',
    },
    cardkolomlogogrup:{
      flexDirection:'row',
      justifyContent:'space-around',
    },
    cardlogo:{
      width: 74,
      height: 74,
      resizeMode: 'contain',
    },
    cardlogolawan:{
      width: 74,
      height: 74,
      resizeMode: 'contain',
      justifyContent:'space-between',
      alignSelf:'flex-end',
    },
    cardtextlawan:{
      fontSize: 20,
      fontFamily: fontType['Pjs-Medium'],
      alignSelf:'flex-end',
      color: colors.blue(0.6),
    },
    cardskor:{
      fontSize: 20,
      fontFamily: fontType['Pjs-Medium'],
      alignSelf:'center',
      justifyContent:'center',
      color: colors.blue(0.6),
    }
  });
  const itemHorizontal = StyleSheet.create({
    cardItem: {
      width: 370,
      flex: 1,
    },
    cardImage: {
      width: '100%',
      height: 200,
      borderRadius: 5,
    },
    cardContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 15,
    },
    cardInfo: {
      justifyContent: 'flex-end',
      height: '100%',
      gap: 10,
      maxWidth: '60%',
    },
    cardTitle: {
      fontFamily: fontType['Pjs-Bold'],
      fontSize: 14,
      color: colors.white(),
    },
    cardText: {
      fontSize: 10,
      color: colors.white(),
      fontFamily: fontType['Pjs-Medium'],
    },
    cardIcon: {
      backgroundColor: colors.white(0.33),
      padding: 5,
      borderColor: colors.white(),
      borderWidth: 0.5,
      borderRadius: 5,
    },
  
  
  });