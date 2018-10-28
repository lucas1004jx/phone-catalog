import {combineReducers} from 'redux';
import phoneReducer from './phoneReducer';
import activePhoneReducer from './activePhoneReducer';

 const rootReducer=combineReducers({
    phones:phoneReducer,
    activePhone:activePhoneReducer
})

export default rootReducer;