import { useEffect, useState } from 'react';
import { productClient } from '../productClient';
import { Link } from 'react-router-dom';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productClient.fetch(`*[_type == "product"]{
      _id,
      name,
      slug,
      image {
        asset -> {
          url
        }
      },
      content
    }`).then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product._id} className="product-card">
          <Link to={`/product/${product.slug?.current}`}>
            <img
              src={product.image?.asset?.url}
              alt={product.name}
              className="product-img"
            />
            <h2 className="product-name">{product.name}</h2>
          </Link>
          <p className="product-excerpt">
            {product.content?.[0]?.children?.[0]?.text
              ? product.content[0].children[0].text.slice(0, 100) + '...'
              : 'No description available.'}
          </p>
          <Link to={`/product/${product.slug?.current}`} className="product-more">
            View Product →
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
