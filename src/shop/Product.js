import React from 'react'
import { Link, useParams } from 'react-router-dom';

const Product = ({ PRODUCT }) => {
    const { itm } = useParams();
    const matchItm = PRODUCT.filter(it => itm == it.id)

    return (
        <section className='ShopList csp'>
            <div className="inner">
                <figure key={matchItm.id}>
                    <Link to={'/List/' + matchItm.id}>
                        <div className="box">
                            <img src={process.env.PUBLIC_URL + matchItm.src} alt="" />
                        </div>
                        <div className="collection">{matchItm.collection}</div>
                        <div className="name">{matchItm.name}</div>
                    </Link>
                </figure>
            </div>
        </section>
    )
}

export default Product;