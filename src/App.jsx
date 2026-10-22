const features = [
  { title: 'Fast', text: 'Built on Vite for instant dev server start and hot reload.' },
  { title: 'Modern', text: 'React 18 with a clean, minimal component structure.' },
  { title: 'Ready', text: 'Runs in Docker with a single compose command.' },
]

export default function App() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', color: '#0f172a', background: '#f8fafc', minHeight: '100vh' }}>
      <header style={{ maxWidth: 1080, margin: '0 auto', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong style={{ fontSize: 20 }}>Gemini Plus</strong>
        <a href="#features" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 600 }}>Features</a>
      </header>
      <main style={{ maxWidth: 1080, margin: '0 auto', padding: '64px 24px', display: 'flex', flexDirection: 'column', gap: 64 }}>
        <section style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
          <h1 style={{ fontSize: 48, margin: 0 }}>Welcome to Gemini Plus</h1>
          <p style={{ fontSize: 18, color: '#475569', maxWidth: 560, margin: 0 }}>
            A simple starter landing page built with Vite and React.
          </p>
          <a href="#features" style={{ background: '#2563eb', color: '#fff', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>
            Get started
          </a>
        </section>
        <section id="features" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
          {features.map((f) => (
            <div key={f.title} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 24 }}>
              <h3 style={{ margin: '0 0 8px' }}>{f.title}</h3>
              <p style={{ margin: 0, color: '#475569' }}>{f.text}</p>
            </div>
          ))}
        </section>
      </main>
      <footer style={{ textAlign: 'center', padding: 24, color: '#64748b' }}>© {new Date().getFullYear()} Gemini Plus</footer>
    </div>
  )
}
