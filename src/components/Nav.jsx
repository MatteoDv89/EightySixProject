import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
           <div className="nav">
                <a href="/">
                 <img src="/favicon.png" alt="" />
                </a>
                <ul>
                    <Link to="/character" className='navlink'>
                           <span></span><span></span><span></span><span></span>
                         <li>Characters</li>
                    </Link>
                    <Link to="video"  className='navlink'>
                           <span></span><span></span><span></span><span></span>
                            <li>Video</li>
                    </Link>
                    <Link to="login"  className='navlink'>
                           <span></span><span></span><span></span><span></span>
                           <li>Login</li>
                    </Link>
                </ul>
            </div>
    );
};

export default Nav;