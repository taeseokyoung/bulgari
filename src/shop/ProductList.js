import { Link, useParams } from 'react-router-dom';

const ProductList = ({ PRODUCT }) => {
    const { cate } = useParams();
    const cateList = PRODUCT.filter(it => cate === it.category)

    return (
        <section className='ShopList cate'>
            <h2>{cate}</h2>
            <ul className='list'>
                <li>total: product : {cateList.length}</li>
                <li className='line'></li>
                <li>
                    <ul className='option'>
                        <li>신상품</li>
                        <li>낮은가격</li>
                        <li>높은가격</li>
                        <li>인기상품</li>
                    </ul>
                </li>
            </ul>
            <div className="inner">
                {
                    cateList.map(el => {
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