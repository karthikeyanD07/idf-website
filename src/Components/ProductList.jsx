import { useEffect, useState } from 'react';
import { productClient } from '../productClient'; // ✅ your product studio client
import { PortableText } from '@portabletext/react';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productClient.fetch(`*[_type == "product"]{
      _id,
      name,
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
          <img
            src={product.image?.asset?.url}
            alt={product.name}
            className="product-img"
          />
          <h2 className="product-name">{product.name}</h2>
          <PortableText value={product.content} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
