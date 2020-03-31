import React, { useState, useEffect } from 'react'
import { Field, reduxForm, change } from 'redux-form'
import InputText from '../components/inputText'
import { connect } from 'react-redux';
import { createUser,editUser } from "../actions/user"


let UserForm = (props) => {
    const [id, setId] = useState(11);
    const [btnValue, setBtnValue] = useState('');
    useEffect(() => {
        if (props.userReducer.editing === true) {
            props.dispatch(change('UserForm', 'name', props.userReducer.edit_user.name))
            props.dispatch(change('UserForm', 'email', props.userReducer.edit_user.email))
            props.dispatch(change('UserForm', 'phone', props.userReducer.edit_user.phone))
            setBtnValue('Save')
        } else {
            setBtnValue('Submit')
        }
    }, [props.userReducer.editing]);

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('here')
        if (Object.keys(props.userReducer.edit_user).length > 0) {
            
        props.userReducer.users.map(user => {
         
                if (props.userReducer.edit_user.id === user.id) {
                    console.log(props.userReducer.edit_user.id , user.id)
                    props.edit_User({
                        id: props.userReducer.edit_user.id,
                        name: props.form.UserForm.values.name,
                        email: props.form.UserForm.values.email, phone: props.form.UserForm.values.phone
                    })
                }

            
        })
    }
        if(props.userReducer.edit_user.length !== 0 && props.userReducer.editing === false){
        props.addUser({
            id: id, name: props.form.UserForm.values.name,
            email: props.form.UserForm.values.email, phone: props.form.UserForm.values.phone
        })
        setId(id + 1)
    
        props.reset()}
    }

    return (<div style={{ border: '1px solid black', width: '200px', display: 'inline-block', margin: 'auto auto' }}>
        <h4>Enter User Details:</h4>
        <form onSubmit={onSubmit} >
            <Field name="name" placeholder="Name" component={InputText} type="text"></Field>
            <Field name="email" placeholder="EmailAddress" component={InputText} type="email"></Field>
            <Field name="phone" placeholder="PhoneNumber" component={InputText} type="number"></Field>
            <button type="submit">{btnValue}</button>
        </form>
    </div>)
}

const mapStateToProps = (state) => {
    console.log('form', state)
    return state
}

const mapDispatchToProps = (dispatch) => {
    return { addUser: (data) => dispatch(createUser(data)),edit_User: (data) => dispatch(editUser(data)) }
}

UserForm = connect(mapStateToProps, mapDispatchToProps)(UserForm)

UserForm = reduxForm({
    form: 'UserForm',

})(UserForm)

export default UserForm 
