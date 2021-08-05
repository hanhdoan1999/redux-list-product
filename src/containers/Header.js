import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {

    const total = useSelector(state => state.cartReducer.totalQuantities)


    return (
        <div className="header">
            <div className="header-top">
                <img src="/img/atom.png" alt="Logo" className="img-logo" style={{width:50}}/>
                <div className="header-top-text">Redux</div>
            </div>
            <p className="header-middle">redux demo</p>
            <p className="header-bottom">Products</p>
           <div className="position-relative">
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {total}
                <span class="visually-hidden">unread messages</span>
            </span>
            <Link to="/cart">
            <img src="/img/cart.png" alt="Logo" width='30'/>
            </Link>
            </div>
            
        </div>
    )
}

export default Header
