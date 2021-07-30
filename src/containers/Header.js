import React from 'react'

function Header() {
    return (
        <div className="header">
            <div className="header-top">
                <img src="/img/atom.png" alt="Logo" className="img-logo" style={{width:50}}/>
                <div className="header-top-text">Redux</div>
            </div>
            <p className="header-middle">redux demo</p>
            <p className="header-bottom">Products</p>
        </div>
    )
}

export default Header
