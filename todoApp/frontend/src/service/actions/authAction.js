import axios from 'axios'
import { UserServer, config } from '../../config/http'
import { loginType, registerType } from '../actionTypes/types';
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
        console.log(error.response.data.message)
    }
}

const register =(data)=>async dispatch=>{
    try{
        const dat = await axios.post(`${UserServer}/auth/register`,data, config);
        if(dat.status >= 200 && data.status <=300){
            alert('account created sucessfully');
        }
    }
    catch(err){
        console.log(err.response.data.message)
    }
}

export {
    login,
    register
}