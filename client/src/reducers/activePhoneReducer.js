import {PHONE_SELECTED} from '../actions/types';
import {CLOSE_OVERLAY} from '../actions/types';
const initialState={
    display:false,
    activePhone:{},
    item:{}
}

export default function(state= initialState,action){
    
    switch(action.type){
        case PHONE_SELECTED:
        return {
            ...state,
           display:action.payload.show,
           activePhone:action.payload.phone
        }
        case CLOSE_OVERLAY:
        return{
            ...state,
            display:action.payload.hide
        }
     default: 
     return state;
    } 
}