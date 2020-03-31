const uuidv4 = require('uuid/v4') //alllows us to have unique ids for all users

/*
*
*
*
*/
const createUser = ({name=""} = {})=> (
    {
        id:uuidv4(),
        name
    }
)


const createMessage = ({message ="", sender=""}= {}) => (
    {
        id:uuidv4(),
        time:getTime(new Date(Date.now())),
        message,
        sender
    }
)

// if an object isnt passed in, = {} will set default.
const createChat = ({messages=[], name="Community", users=[]} = {})=>(
    {
        id:uuidv4(),
        name, // same as name:name,
        messages,
        users,
        typingUsers:[]
    }
)

// gets date object and spits out hours and minutes from date.
const getTime = (date)=>{
    return `${date.getHours()}:${("0"+date.getMinutes()).slice(-2)}`
}

module.exports = {
    createMessage,
    createChat,
    createUser
}