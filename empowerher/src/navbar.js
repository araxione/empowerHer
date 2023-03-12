import React, { Component } from 'react';
import './navbar.css';

//fonts
import './fonts/Poppins-Medium.ttf';
import './fonts/YesevaOne-Regular.ttf';

class NavBar extends Component {
    render() { 
        return (
            <nav className='nav'>
                <h1 className='nav-logo'>empowerHer</h1>
                <ul className='nav-menu'>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Mentors</a>
                    </li>
                    <li>
                        <a href="/">Resources</a>
                    </li>
                    <li>
                        <a href="/">Contact Us</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    {/* my link */}
                    <li>
                        <a href="/interest">Interests</a>
                    </li>
                 </ul>
            </nav>
        )
    }
}

export default NavBar