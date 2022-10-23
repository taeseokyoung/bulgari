import { Link } from 'react-router-dom'

const Nav = ({ PRODUCT }) => {
    const NavCategory = PRODUCT.filter((itm, idx, it) => idx === it.findIndex(t => t.category === itm.category))

    return (

        <ul>
            <li><Link to='/brand'>불가리</Link></li>
            <li><Link to='/highjewelry'>하이주얼리</Link></li>
            {
                NavCategory.map(el => {
                    return <li key={el.id}><Link to={'/List/' + el.category}>
                        {el.category}
                    </Link></li>
                })
            }

            {/* <li><Link to='/jewelry'>주얼리</Link></li>
            <li><Link to='/wedding'>인게이지먼트 & 웨딩</Link></li>
            <li><Link to='/acc'>워치</Link></li>
            <li><Link to='/bag'>핸드백</Link></li>
            <li><Link to='/perfume'>향수</Link></li>
            <li><Link to='/gift'>기프트</Link></li> */}
        </ul>
    )
}

export default Nav;