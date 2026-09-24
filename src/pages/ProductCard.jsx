import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { AppContext } from './AppContext';
import Rating from './Rating';

const ProductCard = ({ product }) => {
  const { addToCart, favorites, toggleFavorite } = useContext(AppContext);
  const isFav = favorites.find(item => item.id === product.id);

  return (
    <div className="product-card">
      <div style={{position: 'relative'}}>
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} className="product-image" />
        </Link>
        <button className={`fav-btn ${isFav ? 'active' : ''}`} onClick={() => toggleFavorite(product)}>
          {isFav ? <FaHeart size={18} /> : <FiHeart size={18} />}
        </button>
        {product.discount > 0 && (
          <span className="discount-badge">-{product.discount}%</span>
        )}
      </div>
      <div className="product-info">
        <Link to={`/product/${product.id}`}>
          <h3 className="product-title">{product.name}</h3>
        </Link>
        <Rating rating={product.rating} reviews={product.reviews} />
        <div className="price-block">
          {product.oldPrice && <p className="old-price">{product.oldPrice.toLocaleString()} so'm</p>}
          <p className="current-price">{product.price.toLocaleString()} so'm</p>
        </div>
        <button className="add-cart-btn" onClick={() => addToCart(product)}>
          <FiShoppingCart style={{marginRight: '5px'}} />
          Savatga qo'shish
        </button>
      </div>
    </div>
  );
};

export default ProductCard;