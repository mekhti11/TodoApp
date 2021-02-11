import React from "react"
import {View, TextInput, StyleSheet} from 'react-native'

const TxtInput = ({inputValue,inputChange}) =>{ // input props

    return(
        <View style={styles.container}>
            <TextInput 
                value = {inputValue}
                style={styles.input}
                placeholder='What need to be done?'
                placeholderTextColor='#cacaca'
                selectionColor='#666'
                onChangeText = {inputChange}  />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft:20,
        marginRight:20,
        shadowOpacity:0.2,
        shadowRadius:3,
        shadowColor:'#000',
        shadowOffset:{
            width:2,
            height:2
        }
    },
    input:{
        height:60,
        backgroundColor:'#fff',
        paddingLeft:10,
        paddingRight:10
    }
})

export default TxtInput