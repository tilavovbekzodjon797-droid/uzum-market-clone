import { useState, useContext, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { AppContext } from './AppContext';
import { products } from '../../products';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useContext(AppContext);
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const filtered = products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
      setResults(filtered);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [searchQuery]);

  const handleSelect = (id) => {
    navigate(`/product/${id}`);
    setSearchQuery("");
    setIsOpen(false);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Mahsulot va toifalarni qidirish"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <FiSearch className="search-icon" size={20} />
      {isOpen && results.length > 0 && (
        <div className="search-results">
          {results.slice(0, 5).map(item => (
            <div key={item.id} className="search-item" onClick={() => handleSelect(item.id)}>
              <img src={item.image} alt={item.name} />
              <div>
                <p style={{fontSize: '14px', fontWeight: 500}}>{item.name}</p>
                <p style={{fontSize: '12px', color: 'var(--primary-color)'}}>{item.price.toLocaleString()} so'm</p>
              </div>
            </div>
          ))}
          {results.length === 0 && <div className="search-item">Hech narsa topilmadi</div>}
        </div>
      )}
    </div>
  );
};

export default SearchBar;