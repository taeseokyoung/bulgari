import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProductList = ({ PRODUCT }) => {


    const { cate } = useParams();
    const cateList = PRODUCT.filter(it => cate === it.category)

    const [sortList, onSortList] = useState(cateList)

    const rowPrice = [...sortList].sort(
        (a, b) => (a.price - b.price)
    );
    const hiPrice = [...sortList].sort(
        (a, b) => (b.price - a.price)
    );
    const newProduct = [...sortList].sort(
        (a, b) => (b.id - a.id)
    );
    const inkki = [...sortList].sort(
        (a, b) => (b.name.length - a.name.length)
    );

    const newSort = (it) => {
        onSortList(it)
    }

    // useEffect(() => {
    //     sortList()
    // }, [newSort])

    return (
        <section className='ShopList cate'>
            <figure className='high01'></figure>
            <h2>{cate}</h2>
            <ul className='list'>
                <li>total: product : {cateList.length}</li>
                <li className='line'></li>
                <li>
                    <ul className='option'>
                        <li onClick={() => { newSort(rowPrice) }}>낮은가격</li>
                        <li onClick={() => { newSort(hiPrice) }}>높은가격</li>
                        <li onClick={() => { newSort(newProduct) }} >신상품</li>
                        <li onClick={() => { newSort(inkki) }}>인기상품</li>
                    </ul>
                </li>
            </ul >
            <div className="inner">
                {
                    sortList.map(el => {
                        return (
                            <figure key={el.id}>
                                <Link to={'/Itm/' + el.id}>
                                    <div className="box" >
                                        <img src={process.env.PUBLIC_URL + el.src} alt="" />
                                    </div>
                                    <div className="collection">{el.collection}</div>
                                    <div className="name">{el.name}</div>
                                    <div className="price"><span>{el.price.toLocaleString()}</span>{el.price ? "원" : "문의하기"}</div>
                                </Link>
                            </figure >
                        )
                    })
                }
            </div >
        </section >
    )
}

export default ProductList;