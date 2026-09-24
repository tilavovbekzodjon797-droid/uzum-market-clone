import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';
import { AppContext } from './AppContext';
import SearchBar from './SearchBar';

const Navbar = () => {
  const { cart, favorites } = useContext(AppContext);
  const navigate = useNavigate();

  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const favCount = favorites.length;

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <h1>Uzum</h1>
        </Link>
        <button className="catalog-btn" onClick={() => navigate('/categories')}>
          <FiMenu size={20} />
          Katalog
        </button>
        <SearchBar />
        <div className="nav-actions">
          <Link to="/login" className="nav-item">
            <FiUser size={22} />
            <span>Kirish</span>
          </Link>
          <Link to="/favorites" className="nav-item">
            <FiHeart size={22} />
            <span>Saralanganlar</span>
            {favCount > 0 && <span className="badge">{favCount}</span>}
          </Link>
          <Link to="/cart" className="nav-item">
            <FiShoppingCart size={22} />
            <span>Savat</span>
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;