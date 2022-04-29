import React, {useEffect, useState} from 'react'
import {Link, useLocation} from "react-router-dom"
import './header.css'

const Header = () => {
    const [activeTab, setActiveTab] = useState("Home");

    const location = useLocation();

    useEffect( () => {
        if(location.pathname ==="/"){
            setActiveTab("Home")
        }
        else if (location.pathname ==="/register"){
            setActiveTab("Register")
        }
    }, [location]);
    return (
    <div className="header">
        <p className="logo">Management</p>
        <div className="header-right">
            <Link to="/">
                <p className= {`${activeTab === "Home" ? "active" : ""}`} 
                onClick = {() => setActiveTab("Home")}>Home</p>
            </Link>
            <Link to="/register">
                <p className= {`${activeTab === "Register" ? "active" : ""}`}
                onClick = {() => setActiveTab("Register")}>Register</p>
            </Link>
        </div>
    </div>
  )
}

export default Header