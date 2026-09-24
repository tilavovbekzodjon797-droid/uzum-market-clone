import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ rating, reviews }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="star" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="star" />);
    } else {
      stars.push(<FaRegStar key={i} className="star" color="#E2E4EB" />);
    }
  }

  return (
    <div className="product-rating">
      {stars}
      <span style={{color: '#8B8E99', marginLeft: '5px'}}>{rating} ({reviews} sharh)</span>
    </div>
  );
};

export default Rating;