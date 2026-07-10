// App — ties the published portfolio together with a floating nav + footer.
function App() {
  const { GlassNav } = window.SriHarshaPortfolioDesignSystem_04f779;
  const [route, setRoute] = React.useState({ name: 'home', arg: null });
  const go = (name, arg = null) => { setRoute({ name, arg }); window.scrollTo({ top: 0, behavior: 'instant' }); };

  const navMap = { Work: 'work', About: 'work', Journal: 'work', Contact: 'contact', Home: 'home' };
  const activeLink = route.name === 'contact' ? 'Contact' : route.name === 'home' ? 'Home' : 'Work';

  return (
    <div style={{ minHeight: '100vh', background: 'var(--surface-page)' }}>
      <div style={{ position: 'sticky', top: 16, zIndex: 50, display: 'flex', justifyContent: 'center', padding: '0 16px' }}>
        <div style={{ width: '100%', maxWidth: 760 }}>
          <GlassNav
            brand="Sri Harsha"
            links={['Home', 'Work', 'Contact']}
            active={activeLink}
            cta="Hire me"
            onNavigate={(l) => go(navMap[l] || 'home')}
            onCta={() => go('contact')}
          />
        </div>
      </div>

      <main style={{ marginTop: -64 }}>
        {route.name === 'home' && <Hero go={go} />}
        {route.name === 'work' && <Work go={go} />}
        {route.name === 'project' && <ProjectDetail id={route.arg} go={go} />}
        {route.name === 'contact' && <Contact />}
      </main>

      <footer style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '28px 16px 36px',
        fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
        © 2026 Sri Harsha · Built with the Glass portfolio system
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
