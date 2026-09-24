import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{textAlign: 'center', marginTop: '100px'}}>
      <h1 style={{fontSize: '72px', color: 'var(--primary-color)'}}>404</h1>
      <h2>Sahifa topilmadi</h2>
      <Link to="/">
        <button className="btn-primary" style={{marginTop: '20px'}}>Bosh sahifaga qaytish</button>
      </Link>
    </div>
  );
};

export default NotFound;