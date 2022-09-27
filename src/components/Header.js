import React from 'react'

import { HiOutlineUser, HiOutlineHeart, HiOutlineShoppingBag } from "react-icons/hi";

import TopBanner from './TopBanner';
import Nav from './Nav';

const Header = () => {
    return (
        <header className="Header">
            <TopBanner />
            <div className="gnb">
                <div className="hInner">
                    <h1 className='on'>
                        <a href="/">

                        </a>
                    </h1>
                    <nav>
                        <Nav />
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