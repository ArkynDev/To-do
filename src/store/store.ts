import { createStore } from 'redux';
import rootReducer from './reducer';
import { loadStateFromLocalStorage, saveStateToLocalStorage } from './localStorage'; // Import localStorage helper functions

const store = createStore(rootReducer);

// Load initial state from localStorage on app launch
const persistedState = loadStateFromLocalStorage();
if (persistedState) {
    store.dispatch({ type: '@@redux/INIT', payload: persistedState }); // Set initial state
}

store.subscribe(() => {
    saveStateToLocalStorage(store.getState()); // Save state to localStorage on state change
});

export default store;