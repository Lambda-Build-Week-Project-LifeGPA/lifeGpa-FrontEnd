import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import Habit from './Habit';
import CancelButton from './CancelButton';
import HabitButton from './HabitButton';
import CustomHabitSelector from './CustomHabitSelector';

const HabitSelector = ({error, touched, status}) => {

    const [habit, setHabit] = useState([]);
    const [button, setButton] = useState(false);
    

    useEffect(() => {
        if(status) {
            setHabit([...habit, status])
        }
    },[status])

    return (
        <div className="habit-container">
            <HabitButton stat={setButton} text="Habit"/>
            
            <dialog open={button}>
                <Form>
                    <Field component="select" name="habits">
                        <option value="" disabled>Select Habit</option>
                        <option value="Brush teeth">Brush Teeth</option>
                        <option value="Went to the gym">Went to the gym</option>
                        <option value="Ate fruits">Ate Fruits</option>
                        <option value="Ate vegetables">Ate Vegetables</option>
                    </Field>
                    <button type="submit">Add Habit</button>
                </Form>
                <CancelButton stat={setButton} />
            </dialog>
            <CustomHabitSelector />
            <div style={{display: "flex"}}>
                {habit.map((list, index) => (
                    <Habit 
                    name={list.habits}
                    key={index}/>
                ))}
            </div>
        </div>
    )
}

export default withFormik({
    mapPropsToValues: (values) => {
        return {
            habits: values.habits || ""
        }
    },
    validationSchema: yup.object().shape({
        habits: yup.string().required("Please select habit")
    }),
    handleSubmit: (values, {setStatus}) => {
        axios.post("https://reqres.in/api/users", values)
            .then((res) => {
                console.log(res)
                setStatus(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }
})(HabitSelector)