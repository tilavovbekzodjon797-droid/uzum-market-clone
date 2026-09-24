import { products } from '../../products';
import Banner from './Banner';
import Category from './Category';
import ProductGrid from './ProductGrid';

const Home = () => {
  const popular = products.slice(0, 10);
  const discounted = products.filter(p => p.discount >= 15).slice(0, 10);

  return (
    <div>
      <Banner />
      <Category />
      
      <h2 className="section-title">Mashhur mahsulotlar</h2>
      <ProductGrid products={popular} />

      <h2 className="section-title">Chegirmadagi mahsulotlar</h2>
      <ProductGrid products={discounted} />
    </div>
  );
};

export default Home;