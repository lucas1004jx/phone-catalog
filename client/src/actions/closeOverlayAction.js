import {CLOSE_OVERLAY} from './types';

export const closeOverlay=()=>dispatch=>(
    dispatch({
        type:CLOSE_OVERLAY,
        payload:{display:false}
    })
)