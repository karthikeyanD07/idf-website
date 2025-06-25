import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { productClient } from '../productClient';
import { PortableText } from '@portabletext/react';
import './ProductDetail.css';

function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    productClient.fetch(`*[_type == "product" && slug.current == $slug][0]{
      name,
      image {
        asset -> {
          url
        }
      },
      content
    }`, { slug })
    .then((data) => setProduct(data));
  }, [slug]);

  if (!product) return <p className="p-6">Loading...</p>;

  return (
    <div className="product-detail-container">
      <h1 className="product-detail-title">{product.name}</h1>
      {product.image?.asset?.url && (
        <img
          src={product.image.asset.url}
          alt={product.name}
          className="product-detail-image"
        />
      )}
      <div className="product-detail-body">
        {product.content ? (
          <PortableText value={product.content} />
        ) : (
          <p>No description available.</p>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
