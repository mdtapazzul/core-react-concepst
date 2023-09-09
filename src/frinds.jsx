 import { useEffect, useState } from 'react'
import './friends.css'
import Friend from './friend'
 
 export default function Friends () {
    const [friends,setFriends] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))

    }, [])

    return(
        <div className='box'>
            <h3>Friends: {friends.length}</h3>
        {
            friends.map(friend => <Friend friend={friend} ></Friend>)
        }

        </div>
    )
    
}

/**
 * 1. state to hold data 
 * 2. use effect use dependency array
 * 3. use fecth to load data 
 * 4. set loded data to the state
 * */ 