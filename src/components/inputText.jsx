import React from 'react'

const InputText = ({input,placeholder,meta:{touched,error}}) => (<div>
<input type="text" {...input} placeholder={placeholder}/>
{touched && error && <span classname="error">{error}</span> }
</div>)

export default InputText