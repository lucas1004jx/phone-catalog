import {PHONE_SELECTED} from '../actions/types';

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
           display:action.payload.display,
           activePhone:action.payload.phone
        }
     default: 
     return state;
    } 
}