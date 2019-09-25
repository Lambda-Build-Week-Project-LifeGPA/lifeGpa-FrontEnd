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
                props.history.push('/dashboard')
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
      <form onSubmit = {login} class="ui form">
        <div class="field">
          <label>Email </label>
          <input
            type="text"
            name="email"
            placeholder = 'Email'
            value={credentials.email}
            onChange={handleChange}
          />
        </div>
        <div class="field">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder = 'Password'
            value={credentials.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" class="ui button">Submit</button>
    </form>
    )
}

export default Login;    
    

        