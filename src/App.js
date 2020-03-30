import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from "./form/userForm"
import UserTable from "./form/userTable"
function App() {
  return (
    <div className="App">
     <UserForm>
     </UserForm>
     <div style={{marginTop: '30px', display: 'block'}}>

     <div style={{textAlign: 'center',marginLeft: '430px'}}>
     <UserTable></UserTable></div></div>
    </div>
  );
}

export default App;
