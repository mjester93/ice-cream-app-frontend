import React from 'react';
import logo from './icecream.png'

const NavBar2 = (props) => {
    return (
        <div className="ui menu"> 
            <div className="item" style={{padding: '6px', width: '55px'}}>
                <img src={logo} alt="find my ice cream logo" style={{width: '45px'}} />
            </div> 
            <a className="item menu-item" href="/my-profile">My Profile</a>
            <a className="item menu-item" href="/">Stores</a>
            { localStorage['is_store_owner'] === 'true'
                ? (<a className="item menu-item" href="/addstore">Add A Store</a>)
                : null
            }
            <div className="right menu">
                <div className="item menu-item" onClick={(e) => {props.logOut(e)}}>Log Out</div>
            </div>
        </div>
    )
}

export default NavBar2;