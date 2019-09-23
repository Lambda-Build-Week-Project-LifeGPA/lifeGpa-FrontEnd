import React, { useState, } from 'react'
import { axiosWithAuth } from '../axiosAuth'

const Login = (props) => {
    const [credentials, setCredentials] = useState({email:'', password: ''})

    const login = e => {
        e.preventDefault();
        axiosWithAuth().post('https://lifegpa-backend.herokuapp.com/users/login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                console.log('Login Call Successful',res)
                props.history.push('/lifegpa')
            })
            .catch (err => {
                console.log('its not working', err)
            })
    }
    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
        <form onSubmit={login}>
          <input
            type="text"
            name="email"
            placeholder = 'Email'
            value={credentials.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder = 'Password'
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    )
}

export default Login;    
    

 