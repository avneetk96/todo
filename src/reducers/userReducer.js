let intialState = {
    editing: false
}

export function userReducer(state = intialState, action) {
    switch (action.type) {
        case 'RECIEVED_USERS':
            return { ...state, users: action.data }
        case 'USER_ADDED':
            let new_users = [...state.users]

            let user = {
                ...action.data.data, id: action.data.id
            }
            new_users.push(user)
            return { ...state, users: new_users }
        case 'USER_DELETED':
            let _users = [...state.users]
            _users = _users.filter(user => user.id !== action.id)
            return { ...state, users: _users }
        case 'EDIT_MODE':
            console.log(action)
            return { ...state, editing: true, edit_user: action.payload }
        case 'USER_UPDATED':
            let _users1 = [...state.users]
            _users1 = _users1.map(user => {
                if (user.id === action.data.id) {
                    return{...user,name: action.data.name,
                        email: action.data.email,
                        phone: action.data.phone} 
                }else {
                    return{...user}
                }
            })
            console.log(_users1)
            return { ...state, editing: false, edit_user:{}, users: _users1 }
        default:
            return state
    }
}