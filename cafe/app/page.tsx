const menuItems = [
  { name: 'Cortado', detail: 'double espresso · steamed milk', price: '$4.50' },
  { name: 'Honey Cinnamon Latte', detail: 'local honey · cinnamon · oat milk', price: '$6.00' },
  { name: 'Cardamom Cold Brew', detail: '14-hour steep · orange peel', price: '$5.50' },
  { name: 'Seasonal Pour Over', detail: 'single origin · ask your barista', price: '$7.00' },
]

export default function Page() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Juniper Coffee home">
          <span>JUNIPER</span>
          <small>COFFEE / BAKERY</small>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#menu">Menu</a>
          <a href="#story">Our story</a>
          <a href="#visit">Visit</a>
        </nav>
        <a className="header-cta" href="#visit">Find us <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span /> EST. 2018 · PORTLAND, OR</p>
          <h1 id="hero-title">Good coffee,<br /><em>slowly made.</em></h1>
          <p className="hero-intro">A neighborhood café for thoughtful mornings, beautiful pastries, and the people who make a city feel like home.</p>
          <a className="text-link" href="#menu">Explore the menu <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-image-wrap">
          <img src="/cafe-coffee-cup.png" alt="A warm cup of coffee on a wooden café table" className="hero-image" />
          <span className="image-note">HOUSE ROAST · 01</span>
        </div>
        <div className="hero-stamp" aria-hidden="true">J<br />C</div>
      </section>

      <section className="marquee" aria-label="Café values">
        <span>WHOLE BEAN COFFEE</span><i>✳</i><span>HANDMADE PASTRIES</span><i>✳</i><span>OPEN EVERY DAY</span><i>✳</i><span>WHOLE BEAN COFFEE</span>
      </section>

      <section className="feature-grid" id="story">
        <div className="feature-image tall-image">
          <img src="/cafe-interior.png" alt="Sunlit interior of Juniper Coffee with wood tables and green plants" />
          <span className="vertical-label">A PLACE TO LAND</span>
        </div>
        <div className="feature-copy">
          <p className="eyebrow"><span /> THE JUNIPER WAY</p>
          <h2>Made for the<br /><em>in-between.</em></h2>
          <p>We believe the best parts of a day happen between the big things: the first sip before work, a pastry shared with a friend, five quiet minutes by the window.</p>
          <p>So we make coffee with care, source from people we know, and keep the door open for whatever your morning needs.</p>
          <a className="text-link" href="#visit">More about us <span aria-hidden="true">↗</span></a>
        </div>
        <div className="feature-image pastry-image">
          <img src="/cafe-pastry.png" alt="Freshly baked pastry with powdered sugar on a ceramic plate" />
          <span className="image-note">BAKED THIS MORNING</span>
        </div>
      </section>

      <section className="menu-section" id="menu" aria-labelledby="menu-title">
        <div className="section-heading">
          <p className="eyebrow"><span /> TODAY AT JUNIPER</p>
          <h2 id="menu-title">The good stuff.</h2>
          <p>Small menu, big attention. Everything is made to order and best enjoyed here.</p>
        </div>
        <div className="menu-layout">
          <div className="menu-list">
            {menuItems.map((item) => (
              <div className="menu-item" key={item.name}>
                <div><h3>{item.name}</h3><p>{item.detail}</p></div><strong>{item.price}</strong>
              </div>
            ))}
            <a className="text-link" href="#visit">View full menu <span aria-hidden="true">↗</span></a>
          </div>
          <div className="menu-image">
            <img src="/cafe-honey-cinnamon.png" alt="Honey cinnamon latte beside a small dish of cinnamon" />
            <div className="caption">OUR MOST-ORDERED<br /><strong>Honey Cinnamon Latte</strong></div>
          </div>
        </div>
      </section>

      <section className="visit-section" id="visit" aria-labelledby="visit-title">
        <div className="visit-card">
          <p className="eyebrow"><span /> COME BY</p>
          <h2 id="visit-title">See you<br /><em>soon?</em></h2>
          <div className="visit-details">
            <div><span>ADDRESS</span><p>814 SE Division St.<br />Portland, Oregon 97202</p></div>
            <div><span>HOURS</span><p>Mon–Fri · 7am–4pm<br />Sat–Sun · 8am–4pm</p></div>
          </div>
          <a className="button-link" href="https://maps.google.com/?q=814+SE+Division+St+Portland+OR" target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">↗</span></a>
        </div>
        <div className="visit-photo"><img src="/cafe-espresso.png" alt="Barista preparing a rich espresso at the café bar" /></div>
      </section>

      <footer className="site-footer">
        <a className="wordmark" href="#top"><span>JUNIPER</span><small>COFFEE / BAKERY</small></a>
        <p>Good things take time.</p>
        <div className="footer-links"><a href="#menu">Instagram</a><a href="mailto:hello@juniper.coffee">Email us</a></div>
      </footer>
    </main>
  )
}
