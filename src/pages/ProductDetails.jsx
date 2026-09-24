import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from './AppContext';
import { products } from '../../products';
import Rating from './Rating';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart, toggleFavorite } = useContext(AppContext);
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <h2>Mahsulot topilmadi</h2>;

  return (
    <div className="details-container">
      <div className="details-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="details-info">
        <h1 className="details-title">{product.name}</h1>
        <Rating rating={product.rating} reviews={product.reviews} />
        
        <div className="details-price-block">
          <p className="old-price" style={{fontSize: '18px'}}>{product.oldPrice.toLocaleString()} so'm</p>
          <p className="current-price" style={{fontSize: '28px'}}>{product.price.toLocaleString()} so'm</p>
        </div>

        <p className="details-desc">{product.description}</p>
        <p style={{marginTop: '10px'}}><strong>Kategoriya:</strong> {product.category}</p>

        <div className="action-btns">
          <button className="btn-primary" onClick={() => addToCart(product)}>
            <FiShoppingCart style={{marginRight: '8px'}}/>
            Savatga qo'shish
          </button>
          <button className="btn-primary" style={{background: '#fff', color: '#1F2026', border: '1px solid #E2E4EB'}} onClick={() => toggleFavorite(product)}>
            <FiHeart style={{marginRight: '8px'}}/>
            Istaklarga qo'shish
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;