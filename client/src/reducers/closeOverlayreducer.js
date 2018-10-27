import {CLOSE_OVERLAY} from '../actions/types';

const initialState={
    display:true,
    item:{}
}

export default function(state= initialState,action){
    
    switch(action.type){
        case CLOSE_OVERLAY:
        return {
            ...state,
           display:action.payload.display
        }
     default: 
     return state;
    } 
}