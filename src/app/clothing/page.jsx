const products = [
  { name: 'Куртка Columbia', price: '1 200 000 сум', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80' },
  { name: 'Футболка Nike', price: '250 000 сум', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' },
  { name: 'Брюки The North Face', price: '700 000 сум', img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80' },
];

export default function ClothingPage() {
  return (
    <main style={{padding: '0 0 40px 0', background: '#f7f7f7'}}>
      {/* Баннер */}

      {/* Контакты */}
      <section style={{margin: '0 auto', maxWidth: 900, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', padding: 32}}>
        <h2 style={{fontSize: '1.2rem', fontWeight: 700, marginBottom: 16, color: '#1a5ae2'}}>Contacts</h2>
        <div style={{fontSize: '1.05rem', color: '#222', marginBottom: 8}}><b>Address:</b> г. Samarkand, Samarkand region, X.A.V, Zarafshan St, 160</div>
        <div style={{fontSize: '1.05rem', color: '#222', marginBottom: 8}}><b>Телефон:</b> <a href="tel:+998772204348" style={{color: '#1a5ae2', textDecoration: 'underline'}}>+998 77 220 43 48</a></div>
        <div style={{fontSize: '1.05rem', color: '#222', marginBottom: 8}}><b>Email:</b> <a href="https://github.com/ShoxruxShokirov" style={{color: '#1a5ae2', textDecoration: 'underline'}}>Github.com/ShoxruxShokirov</a></div>
        <div style={{fontSize: '1.05rem', color: '#222'}}><b>Working Hours:</b> Mon-Sun 09:00-21:00</div>
      </section>
    </main>
  );
} 