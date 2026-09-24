import { products } from '../../products';
import ProductGrid from './ProductGrid';

const Products = () => {
  return (
    <div>
      <h2 className="section-title">Barcha mahsulotlar</h2>
      <ProductGrid products={products} />
    </div>
  );
};

export default Products;