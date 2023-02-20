import React, { useState } from "react";
import '../style/Navbar.css'
import { CSSTransition } from "react-transition-group";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [showForm,setShowForm] = useState(false)

    const navigate = useNavigate()

    const loginOnClick = ()=>{
        {showForm ? setShowForm(false) : setShowForm(true)}
    }
    return(
        <div>
            <div className="topnav">
                    <button className="recipesButton" onClick={()=>navigate('/Recipes')}>
                                Recipes 
                    </button>
                    <button className="loginButton" onClick={loginOnClick}>
                        Login/ Register
                    </button>
            </div>
                {showForm ? <LoginForm /> : <div></div>}
        </div>
    )
}

export default Navbar;