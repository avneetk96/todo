import React,{ useState,useEffect } from 'react'
import { connect } from 'react-redux';
import {getUsers,deleteUser} from "../actions/user"
import { change  } from 'redux-form'

const UserTable = (props)  => {
    useEffect(() => {
      props.userList()
      },[]);

const editUser = (user) => {
  
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
     userForm: state.form.UserForm ? state.form.UserForm : ''
    }
}

const mapDispatchToProps = (dispatch) => {
return {userList: ()=> dispatch(getUsers()),
delete_user: (id) => dispatch(deleteUser(id))
}
}

export default connect(mapStateToProps,mapDispatchToProps)(UserTable)