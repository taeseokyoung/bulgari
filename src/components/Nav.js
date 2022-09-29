import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <ul>
            <li><Link to='/brand'>불가리</Link></li>
            <li><Link to='/highjewelry'>하이주얼리</Link></li>
            <li><Link to='/jewelry'>주얼리</Link></li>
            <li><Link to='/wedding'>인게이지먼트 & 웨딩</Link></li>
            <li><Link to='/acc'>액세서리</Link></li>
            <li><Link to='/perfume'>향수</Link></li>
            <li><Link to='/gift'>기프트</Link></li>
        </ul>
    )
}

export default Nav;