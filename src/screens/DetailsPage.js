import { useRoute } from "@react-navigation/native";
import React from "react";
import { View,Text, StyleSheet } from "react-native";

const DetailsPage =()=>{

    const route =useRoute();
    const task = route.params.task;
    const value=route.params.value;


    return(
        <View style={Styles.container}>
            <Text>Details Page</Text>
            <Text>{task}</Text>
            <Text>{value}</Text>
        </View>
    )
}
const Styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
})
export default DetailsPage;