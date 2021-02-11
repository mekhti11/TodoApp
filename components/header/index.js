import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const Header = () =>{
    return(
        <View style={styles.header}>
            <Text style={styles.headerTxt}>
                todos
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        marginTop : 40        
    },
    headerTxt : {
        textAlign : 'center',
        fontSize : 72,
        color:'rgba(175, 47, 47,0.25)',
        fontWeight : '100'
    }
})

export default Header