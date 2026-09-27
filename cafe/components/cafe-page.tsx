'use client'

import { FormEvent, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Menu as MenuIcon, X } from 'lucide-react'

const menuGroups = [
  { title: 'Coffee', note: 'Roasted in small batches', items: [['Flat White', 'Velvety, double ristretto, steamed milk', '₹220'], ['Orange Cold Brew', 'Citrus peel, slow-steeped, bright', '₹260'], ['Cardamom Cappuccino', 'House spice, soft foam, familiar warmth', '₹240'], ['Pour Over', 'Ask us what is singing today', '₹280']] },
  { title: 'Something to eat', note: 'From the morning oven', items: [['Butter Croissant', 'All-butter, flaky, still warm', '₹190'], ['Olive & Cheese Toast', 'Sourdough, whipped feta, greens', '₹340'], ['Sourdough Avocado Toast', 'Lemon, seeds, chilli oil', '₹420'], ['Cinnamon French Toast', 'Brioche, seasonal fruit, cream', '₹390']] },
  { title: 'All-day plates', note: 'A little more substantial', items: [['Herbed Mushroom Melt', 'Roasted mushrooms, gruyère, toast', '₹440'], ['Seasonal Fruit Bowl', 'Whatever looks best at the market', '₹320'], ['Scrambled Eggs on Toast', 'Soft eggs, herbs, house sourdough', '₹380']] },
]

function ArrowLink({ children, href = '#' }: { children: React.ReactNode; href?: string }) {
  return <a href={href} className="arrow-link">{children}<ArrowUpRight aria-hidden="true" /></a>
}

function Image({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return <img src={src} alt={alt} className={`image-cover ${className}`} />
}

export default function CafePage() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="cafe-site">
      <header className="site-header">
        <a href="#top" className="wordmark" aria-label="Sonder and Steam home">sonder <span>&</span> steam</a>
        <nav className={`site-nav ${mobileOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <a href="#cafe" onClick={() => setMobileOpen(false)}>The Café</a>
          <a href="#menu" onClick={() => setMobileOpen(false)}>Menu</a>
          <a href="#story" onClick={() => setMobileOpen(false)}>Our Story</a>
          <a href="#visit" onClick={() => setMobileOpen(false)}>Find Us</a>
          <a href="#reserve" className="header-cta" onClick={() => setMobileOpen(false)}>Find a table <ArrowUpRight aria-hidden="true" /></a>
        </nav>
        <button className="mobile-toggle" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X aria-hidden="true" /> : <MenuIcon aria-hidden="true" />}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Independent coffee house · Hauz Khas</p>
          <h1>A little more time.<br /><em>A much better</em> coffee.</h1>
          <p className="hero-lede">Good coffee, fresh things from the oven, and a corner of the city that feels like yours.</p>
          <div className="hero-actions"><ArrowLink href="#menu">Explore the menu</ArrowLink><ArrowLink href="#visit">Come say hello</ArrowLink></div>
          <div className="hero-meta"><span>Open from 8 AM</span><span>New Delhi, India</span></div>
        </div>
        <div className="hero-visual">
          <Image src="/cafe-espresso.png" alt="Barista pouring espresso in warm morning light" />
          <div className="hero-stamp">Coffee,<br /><i>slowly.</i></div>
          <div className="hero-inset"><Image src="/cafe-pastry.png" alt="Fresh pastry on a ceramic plate" /></div>
          <span className="vertical-note">good mornings, made here ↘</span>
        </div>
      </section>

      <section className="statement section-pad" id="cafe">
        <div className="section-kicker">01 / The ritual</div>
        <div className="statement-content"><h2>Some mornings<br /><em>deserve to be</em><br />slower.</h2><div className="statement-side"><p>We believe the best part of the day doesn't need to be rushed. A well-made coffee, a warm plate, a familiar face across the table — small things, given room to matter.</p><ArrowLink href="#story">A little about us</ArrowLink></div></div>
        <div className="statement-detail"><Image src="/cafe-coffee-cup.png" alt="Coffee cup resting in a pool of morning sunlight" /><span>Take your time.</span></div>
      </section>

      <section className="menu-section section-pad" id="menu">
        <div className="menu-heading"><div><div className="section-kicker">02 / From our counter</div><h2>Made for your<br /><em>kind of</em> morning.</h2></div><p>A few things change with the season.<br />The good stuff stays.</p></div>
        <div className="menu-layout"><div className="menu-list">{menuGroups.map((group) => <div className="menu-group" key={group.title}><div className="menu-group-head"><h3>{group.title}</h3><span>{group.note}</span></div>{group.items.map(([name, description, price]) => <div className="menu-item" key={name}><div><strong>{name}</strong><span>{description}</span></div><b>{price}</b></div>)}</div>)}<ArrowLink href="#reserve">View full menu</ArrowLink></div><div className="menu-image"><Image src="/cafe-pastry.png" alt="Pastry and coffee at the cafe counter" /><p className="image-caption">Baked in small batches,<br />gone by afternoon.</p></div></div>
      </section>

      <section className="space-section" id="space"><Image src="/cafe-interior.png" alt="Warmly lit cafe interior with people enjoying coffee" /><div className="space-overlay"><div className="section-kicker">03 / The space</div><h2>Your usual,<br /><em>somewhere new.</em></h2><p>A place to work quietly, meet a friend, or let breakfast run long. Come as you are; stay as long as you like.</p></div><span className="space-note">natural light / good company</span></section>

      <section className="story section-pad" id="story"><div className="story-image"><Image src="/cafe-coffee-cup.png" alt="Coffee and sunlight on a wooden table" /><span>Made for lingering.</span></div><div className="story-copy"><div className="section-kicker">04 / Our story</div><h2>Built around the<br /><em>little rituals.</em></h2><p>Sonder & Steam began with a simple idea: make the kind of café we wanted to spend our own mornings in. Thoughtful coffee. Food that feels like a good decision. A room with enough quiet to hear yourself think.</p><p>We're a fictional neighborhood café concept, imagined for Hauz Khas — and for anyone who thinks a good day can start with a warm cup and nowhere else to be.</p><ArrowLink href="#visit">Find your way here</ArrowLink></div></section>

      <section className="seasonal"><div className="seasonal-copy"><div className="section-kicker">05 / Right now</div><h2>The honey<br /><em>cinnamon latte.</em></h2><p>Silky espresso, local honey, and a little cinnamon warmth. The kind of drink that makes you look out the window for a minute.</p><ArrowLink href="#visit">Find it at the café</ArrowLink></div><div className="seasonal-image"><Image src="/cafe-honey-cinnamon.png" alt="Honey cinnamon latte in a ceramic cup" /><span>seasonal special ↗</span></div></section>

      <section className="visit section-pad" id="visit"><div className="visit-heading"><div className="section-kicker">06 / Come by</div><h2>Meet us around<br /><em>the corner.</em></h2></div><div className="visit-grid"><div className="location-graphic"><div className="map-lines" /><div className="map-pin">S&S</div><span>Hauz Khas<br />Village</span></div><div className="visit-info"><p className="address">Hauz Khas Village<br />New Delhi, India<br /><small>fictional demo address</small></p><div className="hours"><div><span>Monday – Friday</span><strong>8:00 AM – 8:00 PM</strong></div><div><span>Saturday – Sunday</span><strong>9:00 AM – 9:00 PM</strong></div></div><div className="contact"><span>+91 00000 00000 <small>demo phone</small></span><span>hello@sonderandsteam.example</span></div><div className="hero-actions"><ArrowLink href="#reserve">Get directions</ArrowLink><ArrowLink href="#reserve">Call the café</ArrowLink></div></div></div></section>

      <section className="reserve section-pad" id="reserve"><div className="reserve-intro"><div className="section-kicker">07 / Stay awhile</div><h2>Save a seat<br /><em>for later.</em></h2><p>Tell us a little about your visit. We'll keep the good table warm.</p></div><div className="reserve-form-wrap">{submitted ? <div className="success-state"><span className="success-mark">✓</span><h3>Your table request is noted.</h3><p>This is a demo inquiry — nothing was sent to a real café. But we're glad you're planning a slow morning.</p><button className="text-button" onClick={() => setSubmitted(false)}>Make another request</button></div> : <form className="reserve-form" onSubmit={handleSubmit}><div className="form-row"><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" required placeholder="you@example.com" /></label></div><div className="form-row"><label>Date<input name="date" type="date" required /></label><label>Preferred time<select name="time" required defaultValue=""><option value="" disabled>Select a time</option><option>Morning · 9:00 AM</option><option>Late morning · 11:00 AM</option><option>Lunch · 1:00 PM</option><option>Afternoon · 4:00 PM</option></select></label></div><div className="form-row"><label>Party size<select name="party" required defaultValue=""><option value="" disabled>How many?</option><option>1 person</option><option>2 people</option><option>3 people</option><option>4+ people</option></select></label><label>Phone <span>(optional)</span><input name="phone" placeholder="+91 ..." /></label></div><label>Notes <span>(optional)</span><textarea name="notes" placeholder="A birthday, a window seat, or just a good morning..." rows={3} /></label><button type="submit" className="submit-button">Send a table request <ArrowUpRight aria-hidden="true" /></button><small className="form-note">Demo inquiry form · does not submit to a real business.</small></form>}</div></section>

      <footer className="site-footer"><div className="footer-top"><a href="#top" className="wordmark">sonder <span>&</span> steam</a><p>Coffee, slowly.</p><div className="footer-links"><a href="#menu">Menu</a><a href="#story">Our story</a><a href="#visit">Find us</a><a href="#reserve">Reservations</a></div><div className="footer-hours"><span>Open daily</span><strong>8 AM — 9 PM</strong></div></div><div className="footer-bottom"><span>© 2026 Sonder & Steam</span><span>A fictional café concept by NPN Tech</span><a href="#top">Back to top ↑</a></div></footer>
    </main>
  )
}
