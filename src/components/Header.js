import React from 'react'
import { AiOutlineUser, FiHeart, FiShoppingBag } from "react-icons/ai";
import TopBanner from './TopBanner';
import Nav from './Nav';

const Header = () => {
    return (
        <header className="Header">
            <TopBanner />
            <div className="gnb">
                <div className="inner">
                    <h1>
                        <a href="/">
                            <img src={process.env.PUBLIC_URL + "/assets/img/logo-g.png"} alt="" />
                        </a>
                    </h1>
                    <Nav />
                    <ul>
                        <li><AiOutlineUser /></li>
                        <li><FiHeart /></li>
                        <li><FiShoppingBag /></li>
                    </ul>
                </div>


            </div>
        </header>
    )
}

export default Header;