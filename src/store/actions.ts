import { createSlice } from '@reduxjs/toolkit';

interface Task {
    id: string; // Use UUIDs for unique IDs
    name: string;
    done: boolean;
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
            addTask: (state, action: PayloadAction<Task>) => {
            state.push(action.payload);
        },
            deleteTask: (state, action: PayloadAction<string>) => { // Use ID for deletion
            return state.filter((task) => task.id !== action.payload);
        },
    },
});

export const { addTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;