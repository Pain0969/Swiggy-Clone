import React, { useState } from 'react'

const User = ({name, location}) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
  return (
    <div>
        <h1>Count : {count}</h1>
        <h1>Count2 :{count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: 9xxxxxxxxxx</h4>
    </div>
    
  )
}

export default User