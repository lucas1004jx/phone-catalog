import {PHONE_SELECTED} from './types';

export const selectPhone=(e)=>dispatch=>(
    dispatch({
        type:PHONE_SELECTED,
        payload:{phone:e.target.parentNode.getAttribute("data-id"),display:true}
    })
)