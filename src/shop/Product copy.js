import React from 'react'
import { Link, useParams } from 'react-router-dom';

const Product = ({ PRODUCT }) => {
    const { itm } = useParams();
    const matchItm = PRODUCT.filter(it => itm === it.id);

    return (
        <section className='ShopList csp'>
            <div className="inner">
                {
                    matchItm.map((el, idx) => {
                        return (
                            <figure key={el.id}>
                                <Link to={'/List/' + el.id}>
                                    <div className="box">
                                        <img src={process.env.PUBLIC_URL + el.src} alt="" />
                                    </div>
                                    <div className="collection">{el.collection}</div>
                                    <div className="name">{el.name}</div>
                                </Link>
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Product;