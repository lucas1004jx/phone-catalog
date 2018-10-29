import {combineReducers} from 'redux';
import phoneReducer from './phoneReducer';
import activePhoneReducer from './activePhoneReducer';
import filterReducer from './filterReducer';

 const rootReducer=combineReducers({
    phones:phoneReducer,
    activePhone:activePhoneReducer,
    filter:filterReducer
})

export default rootReducer;