import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="auth-container">
      <h2>Kirish</h2>
      <p style={{margin: '20px 0'}}>Saytga kirish uchun raqamingizni kiriting</p>
      <input type="text" className="auth-input" placeholder="Telefon raqam yoki email" />
      <input type="password" className="auth-input" placeholder="Parol" />
      <button className="btn-primary" style={{width: '100%', marginBottom: '15px'}}>Kirish</button>
      <p>Hisobingiz yo'qmi? <Link to="/register" style={{color: 'var(--primary-color)'}}>Ro'yxatdan o'tish</Link></p>
    </div>
  );
};

export default Login;