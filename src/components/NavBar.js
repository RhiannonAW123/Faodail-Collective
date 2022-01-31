import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {

    return (
    <ul className="navBar">
        <li className="home">
            <Link to="/" className="navlink">Home</Link>
        </li>

        <li className="events">
            <Link to='/events' className="navlink">Events</Link>
        </li>

        <li className="fabrics">
             <Link to='/fabrics' className="navlink">Fabrics</Link>
        </li>
 
   </ul>
    )
}

export default NavBar;