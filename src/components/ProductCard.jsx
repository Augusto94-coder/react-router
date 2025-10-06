export default function ProductCard(props) {

    const { product } = props;

    return (
        <div className="product-card">

            <img
                src={product.image}
                alt={product.title}
                className="product-image"
            />


            <div className="product-content">
                <h2 className="product-name">{product.title}</h2>
                <p className="product-info">
                    {product.description} - {product.category}
                </p>
                

            </div>
        </div>
    );
}