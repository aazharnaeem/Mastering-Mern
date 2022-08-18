import {useState} from 'react';

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const changeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    };
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data);
    };

    return (
        <div>
            <div>
                <form onSubmit={submitHandler} >
                    <input
                        type='email'
                        placeholder='abc@xyz.com'
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
                    <input type='submit' value='Login' />
                </form>
            </div>

        </div>
    )
};

export default Login;