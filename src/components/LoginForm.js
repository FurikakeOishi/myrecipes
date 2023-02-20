import React from "react";
import { useState } from "react";
import '../style/LoginForm.css'


const LoginForm = ()=>{
    const [newUsername, setNewUsername] = useState('')
    const [newPassword, setNewPassword] = useState('')
    
    const confirmLogin=()=>{
        console.log('Login confirmed')
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log('login submitted')
        //check DB for U/P, if it doesnt exist ask the user should you register it
        // if(  prisma.user.findUnique({where: {username: newUsername}}) )
        //     confirmLogin()
        // else{
        //     if(window.confirm('credentials dont match, should I create a user instead?'))
        //     {
        //         const user={
        //             username: newUsername,
        //             password: newPassword
        //         }
        //         prisma.user.create({ data: user })
        //     }
        // }
    }

    const handleUsernameChange = (event) => {
        console.log(event.target.value)
        setNewUsername(event.target.value)
    }
    const handlePasswordChange = (event) => {
        console.log(event.target.value)
        setNewPassword(event.target.value)
    }

    return(
    <div className="form">
     <form onSubmit={handleSubmit}>
       <div className="input-container">
         <label className="input-label">Username </label>
         <input type="text" value={newUsername} onChange={handleUsernameChange} required />
         
       </div>
       <div className="input-container">
         <label className="input-label">Password </label>
         <input type="password" value={newPassword} onChange={handlePasswordChange} required />
         
       </div>
       <div className="submit-button">
         <input type="submit" /> 
       </div>
     </form>
   </div>
    )
}

export default LoginForm