import React from 'react'
import { useParams } from 'react-router-dom';

const Product = ({ PRODUCT }) => {
    const { itm } = useParams();
    const matchItm = PRODUCT.filter(it => Number(itm) === it.id);

    return (
        <section className='ShopItm csp'>
            <div className="inner">
                {/* <figure className={`left detail0${idx + 1}`}></figure> */}
                <figure className='left'>
                    {
                        matchItm.map((el, idx) => {
                            return (
                                <img src={process.env.PUBLIC_URL + el.src} alt="" />
                            )
                        })
                    }
                </figure>
                <div className="right">
                    <div className="collection">
                        {
                            matchItm.map((el, idx) => {
                                return (
                                    el.collection
                                )
                            }
                            )
                        }
                    </div>
                    <div className="name">
                        {
                            matchItm.map((el, idx) => {
                                return (
                                    el.name
                                )
                            }
                            )
                        }</div>
                    <div className="des">
                        {
                            matchItm.map((el, idx) => {
                                return (
                                    el.des
                                )
                            }
                            )
                        }
                    </div>
                    <div className="price">
                        {
                            matchItm.map((el, idx) => {
                                return (
                                    <span>{el.price.toLocaleString()} {el.price ? "원" : "문의하기"}</span>
                                )
                            })
                        }
                    </div>
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