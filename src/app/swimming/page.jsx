const products = [
  { name: 'Купальник Arena', price: '400 000 сум', img: 'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=400&q=80' },
  { name: 'Очки для плавания Speedo', price: '150 000 сум', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' },
  { name: 'Шапочка для плавания TYR', price: '80 000 сум', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80' },
];

export default function SwimmingPage() {
  return (
    <main style={{padding: '0 0 40px 0', background: '#f7f7f7'}}>
      {/* Баннер */}
      <section style={{width: '100%', minHeight: 180, background: 'linear-gradient(90deg, #eaf0fa 60%, #fff 100%)', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: 32, paddingLeft: 60}}>
        <div>
          <h1 style={{fontSize: '2.2rem', fontWeight: 800, color: '#1a5ae2', marginBottom: 10}}>Плавание</h1>
          <div style={{color: '#222', fontWeight: 500, fontSize: '1.1rem', maxWidth: 600}}>
            Всё для плавания: купальники, очки, шапочки и аксессуары.
          </div>
        </div>
      </section>
      {/* Витрина товаров */}
      <section style={{margin: '0 auto 40px auto', maxWidth: 1200}}>
        <h2 style={{fontSize: '1.3rem', fontWeight: 700, marginBottom: 24, color: '#1a5ae2'}}>Товары</h2>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center'}}>
          {products.map(prod => (
            <div key={prod.name} style={{width: 220, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', padding: 16, textAlign: 'center'}}>
              <img src={prod.img} alt={prod.name} style={{width: 160, height: 160, objectFit: 'cover', borderRadius: 8, marginBottom: 10}} />
              <div style={{fontWeight: 600, fontSize: '1.08rem', marginBottom: 6}}>{prod.name}</div>
              <div style={{color: '#e21a2c', fontWeight: 700, fontSize: '1.1rem', marginBottom: 10}}>{prod.price}</div>
              <div style={{display: 'flex', gap: 8, justifyContent: 'center'}}>
                <a href="tel:+998772204348" style={{background: '#1a5ae2', color: '#fff', borderRadius: 6, padding: '6px 14px', fontWeight: 500, textDecoration: 'none'}}>Позвонить</a>
                <a href="" style={{background: '#e21a2c', color: '#fff', borderRadius: 6, padding: '6px 14px', fontWeight: 500, textDecoration: 'none'}}>Сообщение</a>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Контакты */}
      <section style={{margin: '0 auto', maxWidth: 900, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', padding: 32}}>
        <h2 style={{fontSize: '1.2rem', fontWeight: 700, marginBottom: 16, color: '#1a5ae2'}}>Contacts</h2>
        <div style={{fontSize: '1.05rem', color: '#222', marginBottom: 8}}><b>Address:</b> Samarkand, Samarkand region, X.A.V, Zarafshon St, 160</div>
        <div style={{fontSize: '1.05rem', color: '#222', marginBottom: 8}}><b>Phone:</b> <a href="tel:+998772204348" style={{color: '#1a5ae2', textDecoration: 'underline'}}>+998 77 220 43 48</a></div>
        <div style={{fontSize: '1.05rem', color: '#222', marginBottom: 8}}><b>Github:</b> <a href="https://github.com/ShoxruxShokirov" style={{color: '#1a5ae2', textDecoration: 'underline'}}>https://github.com/ShoxruxShokirov</a></div>
        <div style={{fontSize: '1.05rem', color: '#222'}}><b>Working Hours:</b> Mon-Sun 09:00-21:00</div>
      </section>
    </main>
  );
} 