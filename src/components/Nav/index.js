import '../../App.css'
import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'
const Nav = () => {
    return <div>
    {/* <img src={"../../logo.svg"} className="App-logo" alt="logo" /> */}
    <nav>
        <Link to="/" className='nav-item'>Home</Link>
        <Link to="/about" className='nav-item'>About</Link>
        <Link to=".#contact" className='nav-item'>Contact</Link>
        <Link to="/property" className='nav-item'>Property</Link>
    </nav>
    </div>
};
export default Nav;