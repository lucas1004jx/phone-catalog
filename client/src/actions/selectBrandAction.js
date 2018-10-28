import {SELECT_BRAND} from './types';

export const selectBrand=(e)=>dispatch=>{
 dispatch({
   type:SELECT_BRAND,
   payload:{
       brand:e.target.getAttribute('alt')
}
 }
 )
}