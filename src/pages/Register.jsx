import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="auth-container">
      <h2>Ro'yxatdan o'tish</h2>
      <input type="text" className="auth-input" placeholder="Ism" style={{marginTop: '20px'}}/>
      <input type="text" className="auth-input" placeholder="Telefon raqam" />
      <input type="password" className="auth-input" placeholder="Parol" />
      <button className="btn-primary" style={{width: '100%', marginBottom: '15px'}}>Ro'yxatdan o'tish</button>
      <p>Hisobingiz bormi? <Link to="/login" style={{color: 'var(--primary-color)'}}>Kirish</Link></p>
    </div>
  );
};

export default Register;