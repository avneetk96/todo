import React,{ useState,useEffect } from 'react'
import { connect } from 'react-redux';
import {getUsers,deleteUser,editMode} from "../actions/user"
import { Field, reduxForm,change } from 'redux-form'

const UserTable = (props)  => {
    useEffect(() => {
        console.log('in table',props)
      props.userList()
      },[]);
    

const editUser = (user) => {
  props.set_edit_mode(user)
}

return(<table style={{border: '1px solid black'}}>
    <thead>
        <tr >
            <td><b>Id</b></td>
            <td><b>Name</b></td>
            <td><b>Email</b></td>
            <td><b>Phone</b></td>
            <td><b>Edit</b></td>
            <td><b>Delete</b></td>
        </tr>
    </thead>
    <tbody>
        {props.users ? props.users.map(user =>  {
            return <tr key={user.id}style={{border: '1px solid black'}}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td><button onClick={() => editUser(user)}>Edit</button></td>
            <td><button onClick={() => props.delete_user(user.id)}>Delete</button></td>
        </tr>
        }):""}
    
    </tbody>
</table>)
}
const mapStateToProps = (state) => {
    {console.log('state',state)}
    return {users: state.userReducer.users,
     userForm: state.form.UserForm ? state.form.UserForm : '',
     editing:state.userReducer.editing,
     edited_user: state.userReducer.edited_user
    }
}

const mapDispatchToProps = (dispatch) => {
return {userList: ()=> dispatch(getUsers()),
delete_user: (id) => dispatch(deleteUser(id)),
set_edit_mode: (data) => dispatch(editMode(data))
}
}

export default connect(mapStateToProps,mapDispatchToProps)(UserTable)