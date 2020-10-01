import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableHighlight,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

const availableZipItems = [
    { place: 'ภูเก็จ', code: '83110' },
    { place: 'บางกอก', code: '10100' },
    { place: 'ยะลา', code: '95000' },
    { place: 'นครศรีฯ', code: '80000' },
    { place: 'หาดใหญ่', code: '90000' },
    { place: 'น่าน', code: '55000' },
    { place: 'ขอนแก่น', code: '40000' },
    { place: 'เลย', code: '42000' },
    { place: 'จะทิ้งพระ', code: '90190' },
   
]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })}>


        <View style={styles.backdrop}>
       
            <Text style={{flex:1,fontSize: 25,textAlign:"center" }}>{place}</Text>
            <Text style={{flex:1,fontSize: 25,textAlign:"center"}}>{code}</Text>
   
        </View>


    </TouchableHighlight>
)


const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>
             <ImageBackground source={require('../bgh.jpg')} style={styles.backdrop}>

            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
            <StatusBar style="auto" />
            </ImageBackground>
        </View>
    );

}

const styles = StyleSheet.create({
    backdrop: {
        borderRadius: 30,
        borderWidth: 5,
        borderColor: 'green',
        backgroundColor:'white',
        marginTop: 15,
        fontSize: 35,
        flexDirection:'column',
        
    },
   
});

