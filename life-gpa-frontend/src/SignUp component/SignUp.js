import React, { useState, } from 'react'
import { axiosWithAuth } from '../axiosAuth'

const SignUp = (props) => {
    const [credentials, setCredentials] = useState({name :'', email : '', password : ''})

    const signup = e => {
        e.preventDefault();
        axiosWithAuth().post('https://lifegpa-backend.herokuapp.com/users/register', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                console.log('Register Call Successful',res)
                props.history.push('/login')
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
            name="name"
            placeholder = 'Name'
            value={credentials.name}
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
    