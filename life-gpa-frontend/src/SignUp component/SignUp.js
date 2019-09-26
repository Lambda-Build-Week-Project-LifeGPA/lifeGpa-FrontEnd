import React, { useState, } from 'react'
import { axiosWithAuth } from '../axiosAuth'
import Log from '../img/log.png'
import { Button, Form, Grid, Header, Image,  Segment, Menu, Container } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
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
                <Header as='h2' color='teal' textAlign='center'>
                  <Image src={Log} /> Sign Up for New Account
                </Header>
                <Form onSubmit = {signup} size='large'>
                  <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='FirstName'
                      type="text"
                      name="name"
                      value={credentials.name}
                      onChange={handleChange} />
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
          
                    <Button color='teal' fluid size='large'>
                      Register
                    </Button>
                  </Segment>
                </Form>
              </Grid.Column>
            </Grid>
        </div>
    )
}

export default SignUp;    

