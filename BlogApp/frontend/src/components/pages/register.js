import {useState} from 'react';

const Register = () => {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmpassword: ''
    })

    const changeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const passMatch = () => {
        if (data.password === data.confirmpassword) {
            return true;
        }
        else {
            return false;
        }
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const match = passMatch();
        if (match) {
            console.log(data);
        }
        else {
            alert('Password does not match')
        };
    }
    return (
        <div>
            <div>
                <form onSubmit={submitHandler} >
                    <input
                        type='text'
                        placeholder='firstName'
                        value={data.firstName}
                        name='firstName'
                        onChange={(e) => { changeHandler(e) }}
                    />
                    <input
                        type='text'
                        placeholder='lastName'
                        value={data.lastName}
                        name='lastName'
                        onChange={(e) => { changeHandler(e) }}
                    />
                    <input
                        type='email'
                        placeholder='email'
                        value={data.email}
                        name='email'
                        onChange={(e) => { changeHandler(e) }}
                    />
                    <input
                        type='password'
                        placeholder='password'
                        value={data.password}
                        name='password'
                        onChange={(e) => { changeHandler(e) }}
                    />
                    <input type='submit' value='Register' />
                </form>
            </div>
        </div>

    )
}
export default Register;