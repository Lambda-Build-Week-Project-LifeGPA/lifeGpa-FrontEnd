import React, { useState, } from 'react'
import { axiosWithAuth } from '../axiosAuth'

const SignUp = (props) => {
    const [credentials, setCredentials] = useState({})

    const signup = e => {
        e.preventDefault();
        axiosWithAuth().post('https://reqres.in/api/register', credentials)
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
        <form onSubmit={signup}>
          <input
            type="email"
            name="email"
            placeholder = 'Email'
            value={credentials.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="username"
            placeholder = 'Name'
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder = 'Password'
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Register</button>
        </form>
      </div>
    )
}

export default SignUp;    
    