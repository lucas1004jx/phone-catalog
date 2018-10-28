import {combineReducers} from 'redux';
import phoneReducer from './phoneReducer';
import activePhoneReducer from './activePhoneReducer';
import selectBrandReducer from './selectBrandReducer';

 const rootReducer=combineReducers({
    phones:phoneReducer,
    activePhone:activePhoneReducer,
    selectBrand:selectBrandReducer
})

export default rootReducer;