export const createUser = (user) => {
return {type: 'ADD_USER', payload: user}
}

export const getUsers = () => {
return {type: 'USER_LIST', payload: {}}
}

export const deleteUser = (id) => {
    return {type: 'DELETE_USER', payload: id}  
}