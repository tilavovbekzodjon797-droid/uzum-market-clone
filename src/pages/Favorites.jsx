import { useContext } from 'react';
import { AppContext } from './AppContext';
import ProductGrid from './ProductGrid';

const Favorites = () => {
  const { favorites } = useContext(AppContext);

  return (
    <div>
      <h2 className="section-title">Saralangan mahsulotlar</h2>
      {favorites.length === 0 ? (
        <p>Siz hali hech narsa qo'shmadingiz.</p>
      ) : (
        <ProductGrid products={favorites} />
      )}
    </div>
  );
};

export default Favorites;