import React, { useState, } from 'react'
import { axiosWithAuth } from '../axiosAuth'
import { Button, Form, Grid, Header, Image, Message, Segment, Menu, Container } from 'semantic-ui-react'
import Log from '../img/log.png'
import {Link} from 'react-router-dom'
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
      <div>
              <Menu size='large'>
                <Container>
                  <Button as={Link} to ='/' style = {{marginBottom:'10px', marginTop: '8px'}} >
                    Home
                  </Button>
                  <Menu.Item position='right'>
                    <Button as = {Link} to = '/login' >
                      Log in
                    </Button>
                    <Button as={Link} to ='/signup'  style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Container>
              </Menu>


      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='black' textAlign='center'>
          <Image src={Log} /> Log-in to your account
        </Header>
        <Form onSubmit = {login} size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange} />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              name="password"
              value={credentials.password}
              onChange={handleChange}
            />
  
            <Button color='black' fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>
        <Message color = 'teal'>
          New to us? <a href='/signup' >Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>      
    </div>
    )
}

export default Login;    
    

        