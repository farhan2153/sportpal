import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { SearchNormal } from 'iconsax-react-native'
import { fontType, colors } from '../../theme'
import React from 'react'
import { News1, News2, News3, News4, News5, News6, News7, News8 } from '../../assets'

const News = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ padding: 15, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontFamily: fontType['Pjs-Bold'], fontSize: 20, color: 'black' }}>SportPal</Text>
        <View style={{ marginLeft: 225 }}>
          <SearchNormal color={colors.black()} variant="Linear" size={20} />
        </View>
      </View>
      <ScrollView>
        <View style={{ flexDirection: 'column', gap: 5, padding: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ borderRadius: 20 }} source={News1}></Image>
            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
              <Text style={{ color: 'black', fontFamily: fontType['Pjs-Bold'], fontSize: 13 }}> Jadwal Liga Inggris Pekan Ini Live di SCTV dan Vidio, 11-12 November 2023</Text>
              <Text style={{ color: 'black', fontFamily: fontType['Pjs-Regular'], fontSize: 10 }}>
                Jadwal siaran langsung Premier League musim 2023/2024 di SCTV pekan ini, 11 hingga 12 November 2023. Siaran langsung Liga Inggris di SCTV pekan ini tidak ada dulu karena berbarengan dengan event Piala Dunia U-17 2023.
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ borderRadius: 20 }} source={News2}></Image>
            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
              <Text style={{ color: 'black', fontFamily: fontType['Pjs-Bold'], fontSize: 13 }}>
                Prediksi Chelsea Vs Manchester City: The Citizens DijagokanBaca artikel sepakbola, "Prediksi Chelsea Vs Manchester City: The Citizens Dijagokan"
              </Text>
              <Text style={{ color: 'black', fontFamily: fontType['Pjs-Regular'], fontSize: 10 }}>
                Chelsea vs Manchester City akan tersaji di lanjutan Liga Inggris malam nanti. Prediksinya, The Citizens dijagokan jadi pemenang!
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ borderRadius: 20 }} source={News3}></Image>
            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
              <Text style={{ color: 'black', fontFamily: fontType['Pjs-Bold'], fontSize: 13 }}>
                Indra Sjafri Harap Timnas U-17 Jangan Dibebani BerlebihanBaca artikel sepakbola, "Indra Sjafri Harap Timnas U-17 Jangan Dibebani Berlebihan"
              </Text>
              <Text style={{ color: 'black', fontFamily: fontType['Pjs-Regular'], fontSize: 10 }}>
                Direktur Teknik PSSI Indra Sjafri berharap Timnas Indonesia U-17 tidak diberikan beban berlebihan.
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ borderRadius: 20 }} source={News4}></Image>
            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
              <Text style={{ color: 'black', fontFamily: fontType['Pjs-Bold'], fontSize: 13 }}>
                Piala Dunia U-17: Wonderkid Barca Tak Sangka Dirinya Terkenal di IndonesiaBaca artikel sepakbola, "Piala Dunia U-17: Wonderkid Barca Tak Sangka Dirinya Terkenal di Indonesia"
              </Text>
              <Text style={{ color: 'black', fontFamily: fontType['Pjs-Regular'], fontSize: 10 }}>
                Marc Guiu mendapat sambutan positif dari pencinta sepakbola Indonesia di Solo. Dia bahkan tak sangka terkenal di Indonesia.
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ borderRadius: 20 }} source={News5}></Image>
            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
              <Text style={{ color: 'black', fontFamily: fontType['Pjs-Bold'], fontSize: 13 }}>
                Heboh soal Rumput JIS, PSSI: Lihat Langsung, Jangan dari TVBaca artikel sepakbola, "Heboh soal Rumput JIS, PSSI: Lihat Langsung, Jangan dari TV"
              </Text>
              <Text style={{ color: 'black', fontFamily: fontType['Pjs-Regular'], fontSize: 10 }}>
                Rumput Jakarta International Stadium dikritik netizen. Anggota Komite Eksekutif (Exco) PSSI, Arya Sinulingga, meminta pengkritik untuk lihat langsung, jangan dari televisi.
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ borderRadius: 20 }} source={News6}></Image>
            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
              <Text style={{ color: 'black', fontFamily: fontType['Pjs-Bold'], fontSize: 13 }}>
                Hasil Voting Ballon d'Or 2023: Messi Rupanya Jauh Ungguli HaalandBaca artikel sepakbola, "Hasil Voting Ballon d'Or 2023: Messi Rupanya Jauh Ungguli Haaland"
              </Text>
              <Text style={{ color: 'black', fontFamily: fontType['Pjs-Regular'], fontSize: 10 }}>
                Rupanya Lionel Messi menang Ballon d'Or 2023 dengan keunggulan yang cukup jauh dari Erling Halaand di posisi kedua. Berikut daftarnya.
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ borderRadius: 20 }} source={News7}></Image>
            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
              <Text style={{ color: 'black', fontFamily: fontType['Pjs-Bold'], fontSize: 13 }}>
                Klasemen MotoGP 2023: Bagnaia Jaga Jarak 14 Poin dari MartinBaca artikel detiksport, "Klasemen MotoGP 2023: Bagnaia Jaga Jarak 14 Poin dari Martin"
              </Text>
              <Text style={{ color: 'black', fontFamily: fontType['Pjs-Regular'], fontSize: 10 }}>
                Francesco Bagnaia terus puncaki Klasemen MotoGP 2023. Podium di MotoGP Malaysia 2023 membuat Pecco jaga jarak dari pesaing terdekatnya, Jorge Martin.
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ borderRadius: 20 }} source={News8}></Image>
            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
              <Text style={{ color: 'black', fontFamily: fontType['Pjs-Bold'], fontSize: 13 }}>
                Harry Kane Menggila di Bundesliga, Top Skor Musim Lalu Lewat!Baca artikel sepakbola, "Harry Kane Menggila di Bundesliga, Top Skor Musim Lalu Lewat!"
              </Text>
              <Text style={{ color: 'black', fontFamily: fontType['Pjs-Regular'], fontSize: 10 }}>
                Aliran gol Harry Kane di Bundesliga bersama Bayern Munich terus mengucur deras. Jumlah golnya bahkan sudah melewati total gol top skor musim lalu!
              </Text>
            </View>
          </View>

        </View>
      </ScrollView >
    </View >


  )
}

export default News

const styles = StyleSheet.create({})