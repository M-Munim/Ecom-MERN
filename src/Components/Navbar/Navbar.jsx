import React from 'react'
import './navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu, setMenu] = React.useState("shop")
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="navLogo" />
                <p>Shopper</p>
            </div>

            <ul className='nav-menu'>
                <li onClick={() => { setMenu("shop") }} > <Link style={{ textDecoration: 'none' }} to='/'> shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("mens") }} > <Link style={{ textDecoration: 'none' }} to='/mens'> men</Link>{menu === "mens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("womens") }} > <Link style={{ textDecoration: 'none' }} to='/womens'> women</Link>{menu === "womens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("kids") }} > <Link style={{ textDecoration: 'none' }} to='/kids'> kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
            </ul>

            <div className="nav-login-cart">
                <Link to="/login"><button>Login</button></Link>
                <Link to="/cart"><img src={cart_icon} alt="cart_Img" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar