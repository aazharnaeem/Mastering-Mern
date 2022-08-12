import { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../../service/actions/authAction';
const Login = () => {

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const changeHandler = (e) => {
        const value = e.target.value
        setData({
            ...data,
            [e.target.name]: value
        })
    }

    const dispatch = useDispatch()

    const submit = (e) => {
        e.preventDefault();
        
        dispatch(login(data))
        setTimeout(() => {
            navigate('/Todo')
        }, [100])
    }
    return (
        <div>
            <div style={{
                border: 'solid black 1px',
                margin: '0 auto',
                maxWidth: '300px',
                textAlign: 'center',
                top: '30%',
                left: 0,
                // bottom: 0,
                right: 0,
                position: 'absolute',


            }} >
                <h3>Login</h3>
                <form onSubmit={submit} >
                    <label>email:</label><br />
                    <input type='text' name='email' placeholder="email" onChange={(e) => changeHandler(e)} /><br />
                    <label>password:</label><br />
                    <input type='password' name='password' onChange={(e) => changeHandler(e)} /><br />
                    <input type='submit' value='login' /><br />
                </form>
                <label style={{ fontSize: '13px' }} >
                    do not have an account?
                    <Link to='/register'>signup</Link>
                </label>
            </div>
        </div>
    )
}

export default Login;