import {FETCH_PHONES} from './types';
import axios from 'axios';

const URL='/api/phones';
export const fetchPhones=()=>dispatch=>(
    axios.get(URL).then((phone)=>dispatch({
        type:FETCH_PHONES,
        payload:phone.data
    }))
)