import { Link } from "react-router-dom";

export default function ProductCard(props) {

    const { product } = props;

    return (
        <>
            <div className="product-card">

                <img
                    src={product.image}
                    alt={product.title}
                    className="product-thumb"
                />


                <div className="product-info">
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-price">€ {product.price?.toFixed(2)}</p>
                </div>

                <Link to={`/products/${product.id}`} className="product-link">
                    Dettaglio prodotto
                </Link>
            </div >
        </>

    );
}