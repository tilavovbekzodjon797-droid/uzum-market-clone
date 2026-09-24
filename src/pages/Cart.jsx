import { useContext } from 'react';
import { AppContext } from './AppContext';
import { FiTrash2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQty } = useContext(AppContext);
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const count = cart.reduce((acc, item) => acc + item.qty, 0);

  if (cart.length === 0) return <h2>Savatchangiz bo'sh</h2>;

  return (
    <div>
      <h2 className="section-title">Savatcha</h2>
      <div className="cart-page">
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div style={{flex: 1}}>
                <h4 style={{marginBottom: '5px'}}>{item.name}</h4>
                <p style={{fontWeight: 'bold'}}>{item.price.toLocaleString()} so'm</p>
              </div>
              <div className="qty-control">
                <button className="qty-btn" onClick={() => updateQty(item.id, -1)}>-</button>
                <span>{item.qty}</span>
                <button className="qty-btn" onClick={() => updateQty(item.id, 1)}>+</button>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                <FiTrash2 />
              </button>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h3>Buyurtma tafsilotlari</h3>
          <p style={{margin: '15px 0'}}>Mahsulotlar soni: <strong>{count}</strong></p>
          <h2 style={{color: 'var(--primary-color)'}}>Jami: {total.toLocaleString()} so'm</h2>
          <button className="btn-primary" style={{width: '100%', marginTop: '20px'}} onClick={() => navigate('/checkout')}>
            Rasmiylashtirishga o'tish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;