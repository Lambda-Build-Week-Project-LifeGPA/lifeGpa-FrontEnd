import React, { useState, } from 'react'
import { axiosWithAuth } from '../axiosAuth'

const Login = (props) => {
    const [credentials, setCredentials] = useState({})

    const login = e => {
        e.preventDefault();
        axiosWithAuth().post('https://reqres.in/api/login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                console.log(res)
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
            value={credentials.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    )
}

export default Login;    
    

 