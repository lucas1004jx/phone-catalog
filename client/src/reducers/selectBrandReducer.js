import {SELECT_BRAND} from '../actions/types';
import {DESELECT_BRAND} from '../actions/types';

const initialState={
    brand:null,
    product:null
}

export default function(state=initialState,action){
    
     switch(action.type){
        case SELECT_BRAND:
        return{
           ...state,
           brand: action.payload.brand
        } 
        case DESELECT_BRAND:
        return{
         ...state,
         brand:action.payload.brand
          }
        default:
        return state;
     }
}