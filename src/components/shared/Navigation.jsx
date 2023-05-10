import React from "react";
import { Link } from 'react-router-dom'

const Navigation = (props) => {
    return(
        <nav style={{display: 'flex', flexDirection: 'column', textAlign: 'center' ,backgroundColor: 'red', paddingTop: '3px', paddingBottom: '3px'}}>
            <ul className="" style={{display: 'flex', justifyContent: 'space-evenly', listStyleType: 'none'}}>
                <li><Link style={{textDecoration: 'none', textColor: 'white'}} to="/">Home</Link></li>
                <li><Link style={{textDecoration: 'none', textColor: 'white'}} to="/about_us">About Us</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;
