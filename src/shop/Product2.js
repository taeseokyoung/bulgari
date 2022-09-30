// id 1번 비제로원 링만 먼저 나오게 작업.

import React from 'react'
import { Link, useParams } from 'react-router-dom';

const Product = ({ PRODUCT }) => {
    // const { itm } = useParams();
    // const matchItm = PRODUCT.filter(it => itm === it.id);

    return (
        <section className='ShopItm csp'>
            <div className="inner">
                <figure className='left'>
                    <img src={process.env.PUBLIC_URL + PRODUCT[0].src} alt="" />
                </figure>
                <div className="right">
                    <div className="collection">{PRODUCT[0].collection}</div>
                    <div className="name">{PRODUCT[0].name}</div>
                    <div className="des">{PRODUCT[0].des}</div>
                    <div className="buy">
                        <div className="up">
                            <button>위시리스트</button>
                            <button>쇼핑백에 담기</button>
                        </div>
                        <div className="down">
                            <button>구매하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product;