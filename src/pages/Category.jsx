import { useNavigate } from 'react-router-dom';

const Category = () => {
  const categories = ["Telefonlar", "Elektronika", "Kompyuterlar", "Kiyim", "Oyoq kiyim", "Uy uchun", "Go'zallik", "Bolalar mahsulotlari"];
  const navigate = useNavigate();

  return (
    <div className="categories-wrapper">
      {categories.map(cat => (
        <div key={cat} className="category-card" onClick={() => navigate(`/categories?cat=${cat}`)}>
          {cat}
        </div>
      ))}
    </div>
  );
};

export default Category;