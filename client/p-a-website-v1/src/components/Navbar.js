import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';


function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
       <IconContext.Provider value={{ color: '#fff' }}>

           <div className='navbar'>
             <div className='navbar-container container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <MdFingerprint className='navbar-icon'/>
                    P&A
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/products' className="nav-links" onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contactUs' className="nav-links" onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
             </div>
           </div>
        </IconContext.Provider>

        </>
    )
}

export default Navbar
