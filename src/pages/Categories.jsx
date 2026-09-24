import { useSearchParams } from 'react-router-dom';
import { products } from '../../products';
import ProductGrid from './ProductGrid';
import Category from './Category';

const Categories = () => {
  const [searchParams] = useSearchParams();
  const catParam = searchParams.get('cat');

  let filtered = products;
  if (catParam) {
    filtered = products.filter(p => p.category === catParam);
  }

  return (
    <div>
      <h2 className="section-title">Kategoriyalar</h2>
      <Category />
      <h3 style={{marginBottom: '20px'}}>{catParam ? `${catParam} mahsulotlari` : 'Barcha mahsulotlar'}</h3>
      <ProductGrid products={filtered} />
    </div>
  );
};

export default Categories;