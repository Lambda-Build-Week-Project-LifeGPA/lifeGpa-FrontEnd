import React, { useState, } from 'react'
import { axiosWithAuth } from '../axiosAuth'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const SignUp = (props) => {
    const [credentials, setCredentials] = useState({name :'', email : '', password : ''})

    const signup = e => {
        e.preventDefault();
        axiosWithAuth().post('https://lifegpa-backend.herokuapp.com/users/register', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                console.log('Register Call Successful',res)
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
      <Form onSubmit = {signup} >
        <Form.Field>
          <label>First Name</label>
          <input
                          type="text"
                          name="name"
                          placeholder = 'Name'
                          value={credentials.name}
                          onChange={handleChange}
                        />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
            <Form.Input
                          type="text"
                          name="email"
                          placeholder = 'Email'
                          value={credentials.email}
                          onChange={handleChange}
                        
      
                        />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
                          type="password"
                          name="password"
                          placeholder = 'Password'
                          value={credentials.password}
                          onChange={handleChange}
                        />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
}

export default SignUp;    


