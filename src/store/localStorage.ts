import { tasksReducer } from './actions'; // Import tasksReducer

// Function to load state from localStorage
export const loadStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('toDoListState');
        if (serializedState) {
        return JSON.parse(serializedState); // Parse JSON string
        }
    } catch (error) {
        console.error('Error loading state from localStorage:', error);
        return null;
    }
    return null; // No state found in localStorage
};

// Function to save state to localStorage
export const saveStateToLocalStorage = (state: typeof tasksReducer.initialState) => {
    try {
        const serializedState = JSON.stringify(state); // Convert state to JSON string
        localStorage.setItem('toDoListState', serializedState);
    } catch (error) {
        console.error('Error saving state to localStorage:', error);
    }
};
