let intialState = {}

export function userReducer(state = intialState,action) {
switch (action.type){
    case 'RECIEVED_USERS':
    return {...state,users: action.data}
    case 'USER_ADDED':
    let new_users = [...state.users]
    console.log('action',action)
    let user = {
        ...action.data.data,id: action.data.id
    }
     new_users.push(user)
    return {...state,users: new_users}
    case 'USER_DELETED':
    console.log('action',action)
    let _users = [...state.users]
    _users = _users.filter(user => user.id !== action.id)
    return {...state,users: _users}
    default:
    return state
}
}