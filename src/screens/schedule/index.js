import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fontType,colors } from '../../theme'
import {LaLigaSmall, GironaSmall, CeltaSmall, BarcelonaSmall, RealMadridSmall, Liga1Small, AremaFCSmall, AiSmall, PremierSmall, ChelseaSmall, ManCitySmall} from '../../assets'
import { SearchNormal } from 'iconsax-react-native'

const Schedule = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
    <ScrollView>
         <View style={{padding: 15, flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontFamily: fontType['Pjs-Bold'], fontSize:20, color: 'black'}}>SportPal</Text>
            <View style={{marginLeft: 225}}>
                <SearchNormal color={colors.black()} variant="Linear" size={20} />
            </View>   
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{padding : 10, flexDirection: 'row', gap:10, marginHorizontal: 5}}>
            <TouchableOpacity>
                <View style={{padding: 15, backgroundColor: '#B42FED',borderRadius:20}}>
                        <Text style={{fontFamily: fontType['Pjs-Bold'], fontSize:13, color: 'white'}}>
                            FootBall
                        </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{padding: 15, backgroundColor: '#B42FED',borderRadius:20}}>
                    <Text style={{fontFamily: fontType['Pjs-Bold'], fontSize:13, color: 'white'}}>
                        Volly
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{padding: 15, backgroundColor: '#B42FED',borderRadius:20}}>
                    <Text style={{fontFamily: fontType['Pjs-Bold'], fontSize:13, color: 'white'}}>
                        Mobile Legend
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{padding: 15, backgroundColor: '#B42FED',borderRadius:20}}>
                    <Text style={{fontFamily: fontType['Pjs-Bold'], fontSize:13, color: 'white'}}>
                        Basket Ball
                    </Text>
                </View>
            </TouchableOpacity>
            </View>
        </ScrollView>
        <View style={{padding : 20, marginTop: -2}}>
            <View style={{flexDirection: 'row', alignItems: 'center', padding: 5, gap: 5}}>
                <Image source={LaLigaSmall}></Image>
                <Text style={{fontFamily: fontType['Pjs-Medium'],fontSize:13, color: 'black'}}>LaLiga</Text>
                <View style={{marginLeft: 210}}>
                    <Text style={{fontFamily: fontType['Pjs-Medium'],fontSize:13, color: 'black'}}>Hari Ini</Text>
                </View>
            </View>
            <View style={{flexDirection: 'column', padding:8, gap:8, backgroundColor: '#D9D9D9',marginRight: -19}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13, color: 'black'}}>03.00</Text>
                    <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13, marginLeft: 180, color: '#E43131'}}>
                        FT
                    </Text>
                </View>
                <View style={{padding:3, flexDirection: 'row', alignItems: 'center', gap: 5}}>
                    <Image source={GironaSmall}></Image>
                    <View style={{flexDirection:'row', alignItems: 'center'}}>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13, color: 'black'}}>
                            Girona
                        </Text>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13,  marginLeft: 125, color: '#000000', opacity: 0.30}}>
                            1
                        </Text>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13,  marginLeft: 22, color: '#E43131'}}>
                            1
                        </Text>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13,  marginLeft: 15, color: '#000000'}}>
                            1.05
                        </Text>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13,  marginLeft: 9, color: '#000000'}}>
                            1.20
                        </Text>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13,  marginLeft: 9, color: '#000000'}}>
                            1.14
                        </Text>
                    </View>
                </View>
                <View style={{padding:3, flexDirection: 'row', alignItems: 'center', gap: 5}}>
                    <Image source={CeltaSmall}></Image>
                    <View style={{flexDirection:'row', alignItems: 'center'}}>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13, color: 'black'}}>
                            Celta Figo
                        </Text>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13,  marginLeft: 101, color: '#000000', opacity: 0.30}}>
                            0
                        </Text>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13,  marginLeft: 22, color: '#E43131'}}>
                            0
                        </Text>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13,  marginLeft: 11, color: '#000000'}}>
                            1.06
                        </Text>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13,  marginLeft: 7, color: '#000000'}}>
                            0.06
                        </Text>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13,  marginLeft: 3, color: '#000000'}}>
                            3.06
                        </Text>
                    </View>
                </View>
            </View>
        </View>
        <View style={{padding : 20, marginTop: -10}}>
            <View style={{flexDirection: 'row', alignItems: 'center', padding: 5, gap: 5}}>
                <Image source={LaLigaSmall}></Image>
                <Text style={{fontFamily: fontType['Pjs-Medium'],fontSize:13, color: 'black'}}>LaLiga</Text>
                <View style={{marginLeft: 210}}>
                    <Text style={{fontFamily: fontType['Pjs-Medium'],fontSize:13, color: 'black'}}>Hari Ini</Text>
                </View>
            </View>
            <View style={{flexDirection: 'column', padding:8, gap:8, backgroundColor: '#D9D9D9',marginRight: -19}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13, color: 'black'}}>
                        23.15
                    </Text>
                </View>
                <View style={{padding:3, flexDirection: 'row', alignItems: 'center', gap: 5}}>
                    <Image source={BarcelonaSmall}></Image>
                    <View style={{flexDirection:'row', alignItems: 'center'}}>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13, color: 'black'}}>
                            Barcelona
                        </Text>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13,  marginLeft: 150, color: '#000000'}}>
                            2.14
                        </Text>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13,  marginLeft: 9, color: '#000000'}}>
                            0.14
                        </Text>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13,  marginLeft: 9, color: '#000000'}}>
                            1.54
                        </Text>
                    </View>
                </View>
                <View style={{padding:3, flexDirection: 'row', alignItems: 'center', gap: 5}}>
                    <Image source={RealMadridSmall}></Image>
                    <View style={{flexDirection:'row', alignItems: 'center'}}>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13, color: 'black'}}>
                            Real Madrid
                        </Text>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13,  marginLeft: 144, color: '#000000'}}>
                            2.06
                        </Text>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13,  marginLeft: 7, color: '#000000'}}>
                            0.16
                        </Text>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13,  marginLeft: 7, color: '#000000'}}>
                            1.66
                        </Text>
                    </View>
                </View>
            </View>
        </View>
        <View style={{padding : 20, marginTop: -10}}>
            <View style={{flexDirection: 'row', alignItems: 'center', padding: 5, gap: 5}}>
                <Image source={Liga1Small}></Image>
                <Text style={{fontFamily: fontType['Pjs-Medium'],fontSize:13, color: 'black'}}>Liga 1 BRI</Text>
                <View style={{marginLeft: 210}}>
                    <Text style={{fontFamily: fontType['Pjs-Medium'],fontSize:13, color: 'black'}}>Hari Ini</Text>
                </View>
            </View>
            <View style={{flexDirection: 'column', padding:8, gap:8, backgroundColor: '#D9D9D9',marginRight: -19}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13, color: 'black'}}>
                        15.00
                    </Text>
                </View>
                <View style={{padding:3, flexDirection: 'row', alignItems: 'center', gap: 5}}>
                    <Image source={AremaFCSmall}></Image>
                    <View style={{flexDirection:'row', alignItems: 'center'}}>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13, color: 'black'}}>
                            Arema FC
                        </Text>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13,  marginLeft: 150, color: '#000000'}}>
                            2.04
                        </Text>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13,  marginLeft: 9, color: '#000000'}}>
                            0.4
                        </Text>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13,  marginLeft: 9, color: '#000000'}}>
                            1.04
                        </Text>
                    </View>
                </View>
                <View style={{padding:3, flexDirection: 'row', alignItems: 'center', gap: 5}}>
                    <Image source={AiSmall}></Image>
                    <View style={{flexDirection:'row', alignItems: 'center'}}>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13, color: 'black'}}>
                            Arema Indonesia
                        </Text>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13,  marginLeft: 113, color: '#000000'}}>
                            4.06
                        </Text>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13,  marginLeft: 7, color: '#000000'}}>
                            0.6
                        </Text>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13,  marginLeft: 10, color: '#000000'}}>
                            1.76
                        </Text>
                    </View>
                </View>
            </View>
        </View>
        <View style={{padding : 20, marginTop: -10}}>
            <View style={{flexDirection: 'row', alignItems: 'center', padding: 5, gap: 5}}>
                <Image source={PremierSmall}></Image>
                <Text style={{fontFamily: fontType['Pjs-Medium'],fontSize:13, color: 'black'}}>Premier League</Text>
                <View style={{marginLeft: 210}}>
                    <Text style={{fontFamily: fontType['Pjs-Medium'],fontSize:13, color: 'black'}}>Hari Ini</Text>
                </View>
            </View>
            <View style={{flexDirection: 'column', padding:8, gap:8, backgroundColor: '#D9D9D9',marginRight: -19}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13, color: 'black'}}>
                        23.15
                    </Text>
                </View>
                <View style={{padding:3, flexDirection: 'row', alignItems: 'center', gap: 5}}>
                    <Image source={ChelseaSmall}></Image>
                    <View style={{flexDirection:'row', alignItems: 'center'}}>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13, color: 'black'}}>
                            Chelsea
                        </Text>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13,  marginLeft: 150, color: '#000000'}}>
                            4.04
                        </Text>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13,  marginLeft: 9, color: '#000000'}}>
                            1.4
                        </Text>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13,  marginLeft: 9, color: '#000000'}}>
                            2.04
                        </Text>
                    </View>
                </View>
                <View style={{padding:3, flexDirection: 'row', alignItems: 'center', gap: 5}}>
                    <Image source={ManCitySmall}></Image>
                    <View style={{flexDirection:'row', alignItems: 'center'}}>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13, color: 'black'}}>
                            Manchester City
                        </Text>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13,  marginLeft: 110, color: '#000000'}}>
                            1.06
                        </Text>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13,  marginLeft: 7, color: '#000000'}}>
                            2.6
                        </Text>
                        <Text style={{fontFamily: fontType['Pjs-Regular'],fontSize:13,  marginLeft: 10, color: '#000000'}}>
                            5.76
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    </ScrollView>
    </View>
  )
}

export default Schedule

const styles = StyleSheet.create({})