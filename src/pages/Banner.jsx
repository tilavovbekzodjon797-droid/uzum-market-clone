const Banner = () => {
  return (
    <div className="banner-slider">
      <div className="banner-content">
        <h2>Katta Chegirmalar!</h2>
        <p>Barcha elektronika mahsulotlariga 30% gacha chegirma</p>
        <button className="btn-primary" style={{padding: '10px 20px'}}>Xarid qilish</button>
      </div>
      <img src="https://picsum.photos/400/250?random=100" alt="Banner" style={{borderRadius: '12px'}} />
    </div>
  );
};

export default Banner;