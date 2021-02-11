import React,{Component} from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from "../header";

class Main extends Component{

    constructor(){
        super()
        // this.state = {
        //     inputVal : '',
        //     todos : [],
        //     type : 'All'
        // }
    }

    render(){
        return (
            <View style={styles.container}>
                <ScrollView keyboardShouldPersistTaps='always'
                           style={styles.content}>
                 <Header/>
               </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    content: {
        flex: 1,
        paddingTop: 60
    } 
})
export default Main