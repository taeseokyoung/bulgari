import React from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineUser, HiOutlineHeart, HiOutlineShoppingBag } from "react-icons/hi";

import TopBanner from './TopBanner';
import Nav from './Nav';

const Header = ({ PRODUCT }) => {
    return (
        <header className="Header">
            <TopBanner />
            <div className="gnb">
                <div className="hInner">
                    <h1 className='on'>
                        <Link to="/">bulgari main</Link>
                    </h1>
                    <nav>
                        <Nav PRODUCT={PRODUCT} />
                    </nav>
                    <ul className='service'>
                        <li><HiOutlineUser /></li>
                        <li><HiOutlineHeart /></li>
                        <li><HiOutlineShoppingBag /></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;