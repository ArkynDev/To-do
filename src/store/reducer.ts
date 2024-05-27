import { combineReducers } from 'redux';
import tasksReducer from './actions';

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export default rootReducer;