import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';

const Habit = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <Form >
                <label>Completion</label>
                <Field type="checkbox" name="completion"/>
            </Form>
        </div>
    )
}
export default withFormik({
    mapPropsToValues: (values) => {
        return{completion: values.completion || false}
    },
    validationSchema: yup.object().shape({
        completion: yup.boolean().oneOf([true])
    })
})(Habit)