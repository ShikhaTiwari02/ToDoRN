import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";


const SubmitPage = () => {
    const navigation = useNavigation();
    const [input, setInput] = useState("");


    const handlesubmit =()=>{
        navigation.navigate("DetailsPage", {task: input, value: 10});
        
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputText}
                placeholder="Enter your Task"
                onChangeText={(text) => { setInput(text) }}>
            </TextInput>
            <TouchableOpacity style={styles.buttonSubmit}  
                onPress={handlesubmit} >
                <Text style={styles.buttonSubmitText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    inputText: {
        fontSize: 24,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#000",
        width: "80%",
        margin: 20,
    },
    buttonSubmit:{
        width: "80%",
        backgroundColor: "#000",
        borderRadius: 6,
        paddingVertical: 8,
        marginTop: 24,
        alignItems: "center"
    },
    buttonSubmitText:{
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
    }

})
export default SubmitPage;