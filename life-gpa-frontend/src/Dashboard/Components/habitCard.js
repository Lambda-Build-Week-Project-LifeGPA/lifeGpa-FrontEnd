import React, {useEffect, useState}from 'react'
import { Button, Card } from 'semantic-ui-react'
import axios from 'axios'

const Habits = (props) => {
 const [habits, sethabits] = useState([])
 const [value, setValue] = useState({
    crd : {
        name: '',
        description: ''
    }
 })

    // useEffect(() => {
    //   axios.post(`https://reqres.in/api/users`, value )
    //     .then(res => {
    //         console.log(res)
    //         sethabits(res.data)
    //     })
    // }, [])
   const handleChange = e => {
       setValue(
           {
             value : {
                 ...habits,
                [e.target.name] : e.target.value
             }
           }
       )
   }
   const handleSubmit = e => {
    axios.post(`https://reqres.in/api/users`, value )
    .then(res => {
        console.log(res)
        sethabits(res.data)
    })
   }
    return (
   <div>
    <Card.Group>
        <Card>
            <Card.Content>
            <Card.Header>{habits.name}</Card.Header>
            <Card.Description>
            Did you complete this task today?
            {habits.description}
            </Card.Description>
            </Card.Content>  
            <Card.Content extra>
                <div className="ui two buttons">
                    <Button basic color="green">Yes</Button>
                    <Button basic color="red">No</Button>
                </div>
            </Card.Content> 
        </Card>
    </Card.Group>
     <form onSubmit = {handleSubmit}>
     <input 
         type = 'text'
         onChange = {handleChange}
         name = 'name'
         value = {habits.name} />
    <button>Click</button>
    </form>
    </div>
    )
}

export default Habits;