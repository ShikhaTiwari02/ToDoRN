import React, { useEffect, useState } from "react";
import { Text, View, SafeAreaView, TextInput, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addDummyData, removeDummyData, updateDummyData } from "../redux/reducer";



const TodoScreen = () => {

    const [input, setInput] = useState("");
    const [label, setLabel] = useState("Add Task");
    const [id, setId] = useState(null);
    // const [myList, setMyList]= useState(dummuData);
    const myList = useSelector(state => state.todos.dummyData);
    const dispatch = useDispatch();

    const handleList = () => {
        if (label === "Add Task") {
            if (input.trim()) {
                const newTodo = { id: myList.length + 1, title: input };
                dispatch(addDummyData(newTodo));
                setInput(""); // Clear the input field
            }
        }
        else {
            editObjectById(id, { title: input });
            setId(null);
            setInput("");
            setLabel("Add Task");
        }
    };

    const editObjectById = (id, newData) => {
        // Find the index of the object with the given ID
        const index = myList.findIndex(obj => obj.id === id);

        if (index !== -1) {
            // Update the object with the new data
            //myList[index] = { ...myList[index], ...newData };
            dispatch(updateDummyData({ index, newData }));
            console.log('Updated Object:', myList[index]);
        } else {
            console.log('Object not found!');
        }
    }

    const handleDelete = (id) => {
        dispatch(removeDummyData(id));
        console.log("Deleted Todo with ID:", id, myList);
    };

    const handleEdit = (id) => {
        console.log("Edit Todo with ID:", id);
        setLabel("Edit Task");
        setId(id);
        setInput(myList.find(todo => todo.id === id).title);
    };

    const renderTodo = ({ item, index }) => {
        return (
            <View style={styles.todoList}>
                <Text style={styles.todoTextList}>{item.title}</Text>
                <View style={{ alignItems: "flex-end", flex: 1 }}>
                    <TouchableOpacity onPress={() => handleEdit(item.id)}>
                        <Text style={{ fontSize: 24, }}>✏️</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleDelete(item.id)}>
                        <Text style={{ fontSize: 24 }}>🗑️</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }


    return (
        <View style={{ margin: 16 }}>
            <TextInput
                style={styles.textinput}
                value={input}
                onChangeText={(text) => {
                    // console.log(text)
                    setInput(text);
                }}
                placeholder="add your task"
            />
            <TouchableOpacity style={styles.addbutton} onPress={handleList}>
                <Text style={styles.addtext}>{label}</Text>
            </TouchableOpacity>
            <FlatList
                data={myList} renderItem={renderTodo} />
        </View>
    )

}
export default TodoScreen;
const styles = StyleSheet.create({
    textinput: {
        borderWidth: 2,
        borderColor: "#1e90ff",
        borderRadius: 6,
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    addbutton: {
        backgroundColor: "#000",
        borderRadius: 6,
        paddingVertical: 8,
        marginTop: 24,
        alignItems: "center"

    },
    addtext: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
    },
    todoList: {
        flexDirection: "row",
        backgroundColor: "#1e90ff",
        borderRadius: 6,
        paddingVertical: 8,
        marginTop: 24,
    },
    todoTextList: {
        marginLeft: 6
    }
})