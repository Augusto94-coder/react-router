import { useState, useEffect } from "react";
import ProductsCard from "../components/ProductCard.jsx";

export default function ProductsPage() {

    const [products, setProducts] = useState([])

    function fetchProducts() {
        window.axios.get("https://fakestoreapi.com/products")
            .then((res) => setProducts(res.data))
            .catch(error => alert(error))
    }

    useEffect(() => {
        fetchProducts()
    }
        , [])

    return (
        <section className="page page-products">
            <div className="page-header">
                <h2>Prodotti</h2>
            </div>



            <div className="products-grid">
                {products.map((product) => (

                    <ProductsCard
                        key={product.id}
                        product={product}
                    />

                ))}
            </div>
        </section>
    );
}

