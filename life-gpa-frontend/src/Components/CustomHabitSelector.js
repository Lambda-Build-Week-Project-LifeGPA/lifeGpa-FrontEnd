import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import Habit from './Habit';
import CancelButton from './CancelButton';
import HabitButton from './HabitButton';

const CustomHabitSelector = ({error, touched, status}) => {

    const [habit, setHabit] = useState([]);
    const [button, setButton] = useState(false);
    

    useEffect(() => {
        if(status) {
            setHabit([...habit, status])
        }
    },[status])

    return (
        <>
            <HabitButton stat={setButton} text="Custom Habit" />
            <dialog open={button}>
                <Form>
                    <Field type="text" name="habits" placeholder="Add habit here"/>
                    <button type="submit">Add Habit</button>
                </Form>
                <CancelButton stat={setButton} />
            </dialog>
            <div>
                {habit.map((list, index) => (
                    <Habit 
                    name={list.habits}
                    key={index}/>
                ))}
            </div>
        </>
    )
}

export default withFormik({
    mapPropsToValues: (values) => {
        return {
            habits: values.habits || ""
        }
    },
    validationSchema: yup.object().shape({
        habits: yup.string().required("Please fill out habit")
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
})(CustomHabitSelector)