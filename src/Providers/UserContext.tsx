import {useState, useContext, createContext, useEffect} from 'react'


const [userState, setUserState] = useState()


 const getData = async() => {
    const res = await fetch('http://localhost:3000/user/user-summarize')
    const data = await res.json()
    setUserState(data)
}

useEffect(() => {
    getData()    

}, [])

const UserContext = createContext("")




