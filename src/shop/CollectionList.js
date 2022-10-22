import { Link, useParams } from 'react-router-dom';

const CollectionList = ({ PRODUCT }) => {
    const { collection } = useParams();
    const collectionList = PRODUCT.filter(it => collection === it.collection)

    return (
        <section className='ShopList cate'>
            <h2>{collection}</h2>
            <ul className='list'>
                <li>total: product : {collectionList.length}</li>
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
                    collectionList.map(el => {
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

export default CollectionList;