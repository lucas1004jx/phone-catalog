import {DESELECT_PRODUCT} from './types';

export const deselectProduct=()=>dispatch=>(
    dispatch({
        type:DESELECT_PRODUCT,
        payload:{
            product:null
        }
    })
)