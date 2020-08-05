import { combineReducers } from 'redux';


import { phones } from './phones.reducer';


const rootReducer = combineReducers({
    phones
});

export default rootReducer;