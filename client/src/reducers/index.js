import {combineReducers} from 'redux';
import phoneReducer from './phoneReducer';
import activePhoneReducer from './activePhoneReducer';
import closeOverlayReducer from './closeOverlayreducer';

 const rootReducer=combineReducers({
    phones:phoneReducer,
    activePhone:activePhoneReducer,
    closeOverlay:closeOverlayReducer
})

export default rootReducer;