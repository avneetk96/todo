import axios from 'axios'
 const add_user = async(data) => await axios.post('https://jsonplaceholder.typicode.com/users',data)

const get_users = async() => await axios.get('https://jsonplaceholder.typicode.com/users')
const delete_user = async(id) => await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`)

 export default {add_user,get_users,delete_user}