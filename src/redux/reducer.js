import { createSlice } from '@reduxjs/toolkit';


const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todoList: [],
        dummyData: [{ id: 1, title: "First Todo" }, { id: 2, title: "Second Todo" }],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload);
        },
        addDummyData: (state, action) => {
            state.dummyData.push(action.payload);
        },
        removeDummyData: (state, action) => {
            state.dummyData = state.dummyData.filter(todo => todo.id !== action.payload);
        },
        updateDummyData: (state, action) => {
            const { index, newData } = action.payload;
            state.dummyData[index] = { ...state.dummyData[index], ...newData }; // Safe update via Immer
        },
    },
});

export const { addTodo, addDummyData, removeDummyData, updateDummyData } = todoSlice.actions;
export default todoSlice.reducer;
