import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const products = [
  { name: 'Tramp Tent', price: '2 500 000 UZS', img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80' },
  { name: 'Deuter Backpack', price: '1 100 000 UZS', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80' },
  { name: 'Alexika Sleeping Bag', price: '800 000 UZS', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' },
];

export default function TourismPage() {
  return (
    <main className="tourism-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-title"
          >
            Tourism
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-subtitle"
          >
            Everything for hiking, camping and outdoor activities.
          </motion.p>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <h2 className="section-title">Товары</h2>
        <div className="products-grid">
          {products.map((prod, index) => (
            <motion.div
              key={prod.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="product-card"
              whileHover={{ y: -5, boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}
            >
              <div className="product-image">
                <img src={prod.img} alt={prod.name} />
              </div>
              <div className="product-info">
                <h3 className="product-name">{prod.name}</h3>
                <p className="product-price">{prod.price}</p>
                <div className="product-actions">
                  <a href="tel:+998977603236" className="btn btn-primary">
                    <FaPhone /> Позвонить
                  </a>
                  <a href="mailto:rideruz@yandex.com" className="btn btn-secondary">
                    <FaEnvelope /> Сообщение
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contacts Section */}
      <section className="contacts-section">
        <motion.div 
          className="contacts-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Контакты</h2>
          <div className="contacts-grid">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h3>Адрес</h3>
                <p>г. Ташкент, Мирабадский район, ЦУМ, ул. Ислама Каримова, 17</p>
              </div>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <h3>Телефон</h3>
                <p><a href="tel:+998977603236">+998 97 760 32 36</a></p>
              </div>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h3>Email</h3>
                <p><a href="mailto:rideruz@yandex.com">rideruz@yandex.com</a></p>
              </div>
            </div>
            <div className="contact-item">
              <FaClock className="contact-icon" />
              <div>
                <h3>Время работы</h3>
                <p>Пн-Вс 10:00-20:00</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <style jsx>{`
        .tourism-page {
          padding: 0 0 40px 0;
          background: #f7f7f7;
        }

        .hero-section {
          position: relative;
          width: 100%;
          min-height: 400px;
          background: linear-gradient(135deg, #1a5ae2 0%, #4a90e2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          margin-bottom: 60px;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80') center/cover;
          opacity: 0.2;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          color: white;
          padding: 0 20px;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 20px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .hero-subtitle {
          font-size: 1.4rem;
          font-weight: 500;
          max-width: 600px;
          margin: 0 auto;
        }

        .products-section {
          margin: 0 auto 60px;
          max-width: 1200px;
          padding: 0 20px;
        }

        .section-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 32px;
          color: #1a5ae2;
          text-align: center;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
          justify-content: center;
        }

        .product-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .product-image {
          width: 100%;
          height: 280px;
          overflow: hidden;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .product-card:hover .product-image img {
          transform: scale(1.05);
        }

        .product-info {
          padding: 20px;
        }

        .product-name {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: #333;
        }

        .product-price {
          color: #e21a2c;
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 16px;
        }

        .product-actions {
          display: flex;
          gap: 12px;
        }

        .btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background: #1a5ae2;
          color: white;
        }

        .btn-secondary {
          background: #e21a2c;
          color: white;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .contacts-section {
          margin: 0 auto;
          max-width: 1000px;
          padding: 0 20px;
        }

        .contacts-card {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }

        .contacts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 32px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .contact-icon {
          font-size: 24px;
          color: #1a5ae2;
          flex-shrink: 0;
        }

        .contact-item h3 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: #333;
        }

        .contact-item p {
          color: #666;
          line-height: 1.5;
        }

        .contact-item a {
          color: #1a5ae2;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-item a:hover {
          color: #4a90e2;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }

          .products-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          }

          .contacts-card {
            padding: 24px;
          }
        }
      `}</style>
    </main>
  );
} 