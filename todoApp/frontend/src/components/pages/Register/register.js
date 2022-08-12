import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { register } from '../../../service/actions/authAction'

const Register = () => {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const changeHandler = (e) => {
        const value = e.target.value
        setData({
            ...data,
            [e.target.name]: value
        })
    }

    const dispatch = useDispatch()

    const submit = (e) => {
        e.preventDefault()

        dispatch(register(data))
    }
    return (
        <div style={{


        }} >
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
                <h3>Register</h3>
                <form onSubmit={submit} >
                    <label>First Name:</label><br />
                    <input type='text' placeholder='firstname' name='firstName' onChange={(e) => changeHandler(e)} /><br />
                    <label>Last Name:</label><br />
                    <input type='text' placeholder='lastname' name='lastName' onChange={(e) => changeHandler(e)} /><br />
                    <label>email:</label><br />
                    <input type='text' placeholder="email" name='email' onChange={(e) => changeHandler(e)} /><br />
                    <label>password:</label><br />
                    <input type='password' name='password' onChange={(e) => changeHandler(e)} /><br />
                    <input type='submit' value='register' /><br />
                </form>
                <label style={{ fontSize: '13px' }} >
                    already an account?
                    <Link to='/'>Login</Link>
                </label>
            </div>
        </div>
    )
}

export default Register