import ProductCatalog from "../components/ProductCatalog";

export default function SalePage() {
  return (
    <main style={{padding: '40px 5vw'}}>
      <h1 style={{fontSize: '2.2rem', fontWeight: 700, marginBottom: 32}}>Sale</h1>
      <ProductCatalog category="sale" />
    </main>
  );
} 