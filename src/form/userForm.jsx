import React, { useState,useEffect } from 'react'
import { Field, reduxForm } from 'redux-form'
import InputText from '../components/inputText'
import { connect } from 'react-redux';
import { createUser } from "../actions/user"


let UserForm = (props) => {
    const [id, setId] = useState(11);


    const onSubmit = (e) => {
        e.preventDefault()
        props.addUser({
            id: id, name: props.form.UserForm.values.name,
            email: props.form.UserForm.values.email, phone: props.form.UserForm.values.phone
        })
        setId(id + 1)
        props.reset()
    }

    return (<div style={{border: '1px solid black',width: '200px',display: 'inline-block',margin: 'auto auto'}}>
    <h4>Enter User Details:</h4>
    <form onSubmit={onSubmit} >
        <Field name="name" placeholder="Name" component={InputText} type="text"></Field>
        <Field name="email" placeholder="EmailAddress" component={InputText} type="email"></Field>
        <Field name="phone" placeholder="PhoneNumber" component={InputText} type="number"></Field>
        <button type="submit">Submit</button>
    </form>
    </div>)
}

const mapStateToProps = (state) => {
    console.log('form',state)
    return state
}

const mapDispatchToProps = (dispatch) => {
    return { addUser: (data) => dispatch(createUser(data)) }
}

UserForm = connect(mapStateToProps, mapDispatchToProps)(UserForm)

UserForm = reduxForm({
    form: 'UserForm',

})(UserForm)

export default UserForm 
