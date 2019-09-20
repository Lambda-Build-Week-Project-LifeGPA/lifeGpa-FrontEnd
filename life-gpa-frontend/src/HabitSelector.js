import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import Habit from './Habit';

const HabitSelector = ({error, touched, status}) => {

    const [habit, setHabit] = useState([]);

    useEffect(() => {
        if(status) {
            setHabit([...habit, status])
        }
    },[status])
    
    return (
        <Form>
            <Field component="select" name="habits">
                <option value="" disabled>Select Habit</option>
                <option value="brush teeth">Brush Teeth</option>
                <option value="gym">Went to the gym</option>
                <option value="ate fruits">Ate Fruits</option>
                <option value="ate vegetables">Ate Vegetables</option>
            </Field>
            <button type="submit">Add Habit</button>
        </Form>
    )
}

export default withFormik({
    mapPropsToValues: (values) => {
        return {habits: values.habits || ""}
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