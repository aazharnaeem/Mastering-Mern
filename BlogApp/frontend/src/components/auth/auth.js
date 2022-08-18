
import { Navigate } from "react-router-dom"


const Auth = ({ Component, }) => {
    const ath = true // get from auth reducer
    // const ath = useSelector(state=>state.auth.token)
    // const ath = localStorage.getItem('token')
    return ath ? <Component /> : <Navigate to='/' />
    // return console.log('hi')
}

export default Auth;