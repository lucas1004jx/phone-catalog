import {SELECT_PRODUCT} from './types';

export const selectProduct=(e)=>dispatch=>(
    dispatch({
        type:SELECT_PRODUCT,
        payload:{
            product:e.target.textContent
        }
    })
)