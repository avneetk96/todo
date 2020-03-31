export const createUser = (user) => {
return {type: 'ADD_USER', payload: user}
}

export const getUsers = () => {
return {type: 'USER_LIST', payload: {}}
}

export const deleteUser = (id) => {
    return {type: 'DELETE_USER', payload: id}  
}

export const editMode = (data) => {
    return {type: "EDIT_MODE", payload: data}
}

export const editUser = (data) => {
    console.log('inedit action',data)
    return {type: 'EDIT_USER',payload:data}
}