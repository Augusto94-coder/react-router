import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";


export default function ProductDetailPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        window.axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => setProduct(res.data))
            .catch(() => { navigate('/products') })

    }, [id]);


    /* return (
        <section className="page-product-detail">
            <div className="page-header">
                <h2>{product.title}</h2>
                <Link to="/products">← Torna ai prodotti</Link>
            </div>


            <div className="product-detail">
                <img
                    className="product-detail-image"
                    src={product.image}
                    alt={product.title}
                />
                <div className="product-detail-info">
                    <p>Categoria: {product.category}</p>
                    <p className="product-detail-price">€ {product.price?.toFixed(2)}</p>
                    <p>{product.description}</p>
                </div>
            </div>
        </section>
    ); */

    return (
        product ? (
            <section className="page-product-detail">
                <div className="page-header">
                    <h2>{product.title}</h2>
                    <Link to="/products">← Torna ai prodotti</Link>
                </div>

                <div className="product-detail">
                    <img
                        className="product-detail-image"
                        src={product.image}
                        alt={product.title}
                    />
                    <div className="product-detail-info">
                        <p>Categoria: {product.category}</p>
                        <p className="product-detail-price">€ {product.price?.toFixed(2)}</p>
                        <p>{product.description}</p>
                    </div>
                </div>
            </section>
        ) : (
            <p>Loading...</p>
        )
    );
}