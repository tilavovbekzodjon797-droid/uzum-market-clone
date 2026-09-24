const Checkout = () => {
  return (
    <div className="auth-container">
      <h2>Buyurtmani rasmiylashtirish</h2>
      <p style={{margin: '20px 0', color: 'var(--text-gray)'}}>Iltimos, ma'lumotlaringizni kiriting</p>
      <input type="text" className="auth-input" placeholder="Ism va familiya" />
      <input type="text" className="auth-input" placeholder="Telefon raqam" />
      <input type="text" className="auth-input" placeholder="Manzil" />
      <button className="btn-primary" style={{width: '100%'}}>Buyurtma berish</button>
    </div>
  );
};

export default Checkout;