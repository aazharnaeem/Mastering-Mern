
import { Navigate } from 'react-router-dom';

const Auth = ({ Component }) => {
    const token = localStorage.getItem('token');
    const useAuth = () => {
        if (token) {
            return true
        }
        else {
            return false
        }
    }
    const auth = useAuth();
    return auth ? <Component /> : <Navigate to='/' />

};
export default Auth;