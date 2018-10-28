import {SELECT_BRAND} from '../actions/types';
import {DESELECT_BRAND} from '../actions/types';
import {SELECT_PRODUCT} from '../actions/types';
import {DESELECT_PRODUCT} from '../actions/types';


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
        case SELECT_PRODUCT:
        return{
            ...state,
            product:action.payload.product
        }
        case DESELECT_PRODUCT:
        return{
            ...state,
            product:action.payload.product
        }
        default:
        return state;
     }
}