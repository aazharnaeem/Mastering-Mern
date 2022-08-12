import axios from 'axios'
import { UserServer, config } from '../../config/http'
import { loginType, registerType } from '../actionTypes/types';
import {useNavigate} from 'react-router-dom'
const login =(data)=>async(dispatch)=>{
    try{
        const dat = await axios.post(`${UserServer}/auth/login`,data, config);
        if(dat.status >= 200 && dat.status <=300){
            dispatch({
                type: loginType,
                payload: dat.data
            })
        }
        else{
            console.log('errors')
        }
    }
    catch(error){
        console.log(error)
    }
}

const register =(data)=>async dispatch=>{
    try{
        const dat = await axios.post(`${UserServer}/auth/register`,data, config);
        if(dat.status >= 200 && data.status <=300){
            alert('account created sucessfully');
        }
        else{
            console.log('errors')
        }
    }
    catch(err){
        console.log('err')
    }
}

export {
    login,
    register
}