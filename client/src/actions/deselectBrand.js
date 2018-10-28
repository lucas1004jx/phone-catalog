import {DESELECT_BRAND} from './types';

export const deselectBrand=()=>dispatch=>{
    dispatch({
        type:DESELECT_BRAND,
        payload:{brand:null}
    })
}