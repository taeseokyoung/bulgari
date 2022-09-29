import { Link, useParams } from 'react-router-dom';

const ProductList = ({ PRODUCT }) => {
    const { cate } = useParams();
    const cateList = PRODUCT.filter(it => cate === it.category)

    return (
        <section className='ShopList csp'>
            <div className="inner">
                {
                    cateList.map(el => {
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

export default ProductList;