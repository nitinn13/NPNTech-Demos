'use client'

import { useState } from 'react'
import { ArrowUpRight, Menu, X, MapPin, Check } from 'lucide-react'

const dates = [
  { day: 'TODAY', date: '24', label: 'JUN' },
  { day: 'WED', date: '25', label: 'JUN' },
  { day: 'THU', date: '26', label: 'JUN' },
  { day: 'FRI', date: '27', label: 'JUN' },
  { day: 'SAT', date: '28', label: 'JUN' },
]

const slots = [
  { group: 'MORNING', times: [{ time: '06:00 AM', price: '₹800/hr', status: 'AVAILABLE' }, { time: '07:00 AM', price: '₹800/hr', status: 'AVAILABLE' }] },
  { group: 'AFTERNOON', times: [{ time: '04:00 PM', price: '₹1,000/hr', status: 'AVAILABLE' }, { time: '05:00 PM', price: '₹1,000/hr', status: 'FEW SLOTS' }] },
  { group: 'UNDER LIGHTS', times: [{ time: '07:00 PM', price: '₹1,200/hr', status: 'AVAILABLE' }, { time: '08:00 PM', price: '₹1,400/hr', status: 'FEW SLOTS' }, { time: '09:00 PM', price: '₹1,400/hr', status: 'AVAILABLE' }] },
]

function Mark() {
  return <span className="mark" aria-hidden="true"><i /><i /><i /></span>
}

function Button({ children, dark = false, onClick }: { children: React.ReactNode; dark?: boolean; onClick?: () => void }) {
  return <button onClick={onClick} className={`club-button ${dark ? 'club-button-dark' : ''}`}>{children}<ArrowUpRight size={15} strokeWidth={1.8} /></button>
}

export function WicketClub() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [date, setDate] = useState(0)
  const [selectedSlot, setSelectedSlot] = useState('07:00 PM')
  const [team, setTeam] = useState('8-a-side')
  const [booked, setBooked] = useState(false)
  const [enquirySent, setEnquirySent] = useState(false)

  return (
    <main className="club-site">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="The Wicket Club home"><Mark /><span>THE WICKET<br /><b>CLUB</b></span></a>
        <nav className={menuOpen ? 'nav-open' : ''} aria-label="Main navigation">
          {['The Turf', 'Book a Slot', 'Matches', 'Pricing', 'Location'].map((link) => <a key={link} href={`#${link.toLowerCase().replaceAll(' ', '-')}`} onClick={() => setMenuOpen(false)}>{link}</a>)}
        </nav>
        <a href="#book-a-slot" className="header-cta">BOOK YOUR GAME <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero" id="top">
        <div className="hero-photo" />
        <div className="hero-grid" />
        <div className="hero-inner">
          <div className="eyebrow"><span className="live-dot" /> OPEN DAILY <i /> FLOODLIT ARENA <i /> [CITY]</div>
          <h1>THIS IS<br />YOUR<br /><span>HOME GROUND.</span></h1>
          <p className="hero-copy">Book the pitch. Bring your team.<br />Own the night.</p>
          <div className="hero-actions"><Button onClick={() => document.getElementById('book-a-slot')?.scrollIntoView({ behavior: 'smooth' })}>CHECK SLOT AVAILABILITY</Button><a className="text-link" href="#the-turf">EXPLORE THE TURF <ArrowUpRight size={15} /></a></div>
        </div>
        <div className="hero-score"><span>MATCH NIGHT</span><strong>07:00 PM — 12:00 AM</strong><span>6v6 · 8v8 · 10v10</span></div>
        <div className="hero-meta"><span className="vertical-label">SCROLL TO ENTER ↓</span><span><MapPin size={13} /> [CITY], INDIA</span></div>
      </section>

      <section className="booking section-pad" id="book-a-slot">
        <div className="section-kicker">01 / GET ON THE PITCH</div>
        <div className="booking-head"><h2>GET ON<br /><em>THE PITCH.</em></h2><p>Choose your date, pick your lights,<br />and let the game begin.</p></div>
        <div className="fixture-panel">
          <div className="date-row"><span className="label">SELECT DATE</span><div className="date-options">{dates.map((item, i) => <button key={item.date} className={date === i ? 'date active' : 'date'} onClick={() => setDate(i)}><small>{item.day}</small><strong>{item.date}</strong><small>{item.label}</small></button>)}</div></div>
          <div className="slot-area"><span className="label">SELECT TIME</span>{slots.map((group) => <div className="slot-group" key={group.group}><span className="group-label">{group.group}</span><div className="slots">{group.times.map((slot) => <button key={slot.time} className={`slot ${selectedSlot === slot.time ? 'selected' : ''}`} onClick={() => setSelectedSlot(slot.time)}><span><b>{slot.time}</b><small>{slot.status}</small></span><strong>{slot.price}</strong></button>)}</div></div>)}</div>
          <div className="team-row"><span className="label">TEAM SIZE</span><div className="team-options">{['6-a-side', '8-a-side', '10-a-side'].map((size) => <button key={size} className={team === size ? 'team active' : 'team'} onClick={() => setTeam(size)}>{size}</button>)}</div></div>
          <div className="booking-bottom"><div><span className="label">YOUR FIXTURE</span><strong>{dates[date].day}, {dates[date].date} JUN · {selectedSlot} · {team}</strong></div><button className="club-button" onClick={() => setBooked(true)}>CONTINUE TO BOOKING <ArrowUpRight size={15} /></button></div>
          {booked && <div className="demo-confirm"><Check size={18} /> Demo enquiry ready — the venue team would confirm availability for this slot.</div>}
        </div>
        <p className="fine-print">Demo booking flow — connect your venue&apos;s actual schedule and payment provider.</p>
      </section>

      <section className="turf section-pad" id="the-turf"><div className="section-kicker">02 / THE TURF</div><div className="turf-layout"><div className="turf-image"><img src="/cricket-turf.png" alt="Floodlit cricket turf and crease markings" /><span>THE PLAYING SURFACE / 01</span></div><div className="turf-copy"><h2>NOT JUST A<br /><em>PATCH OF GREEN.</em></h2><p className="lead">A proper match deserves a proper ground.</p><p>Whether it&apos;s a quick six-a-side after work or a full weekend tournament, every detail is designed to make your session feel like match night.</p><div className="highlights">{[['01', 'MATCH-READY PITCH', 'Quality artificial turf and marked playing area.'], ['02', 'LIGHTS ON. GAME ON.', 'Floodlit sessions for after-work and late-night games.'], ['03', 'BUILT FOR YOUR CREW', 'Casual games, practice, tournaments and corporate matches.']].map(([num, title, text]) => <div className="highlight" key={num}><strong>{num}</strong><div><b>{title}</b><p>{text}</p></div></div>)}</div></div></div></section>

      <section className="field-guide section-pad"><div className="field-lines" /><div className="section-kicker">03 / FIELD GUIDE <span>SPEC / EDITABLE VENUE DETAILS</span></div><div className="guide-head"><h2>BUILT FOR<br /><em>THE GAME.</em></h2><p>Everything you need to play your best.<br />Details shown are placeholders to customize.</p></div><div className="spec-grid">{[['PITCH TYPE', '[Artificial turf / Box cricket]'], ['PLAYING FORMATS', '[6v6 · 8v8 · 10v10]'], ['LIGHTING', '[Floodlights / Session timings]'], ['EQUIPMENT', '[Bats · balls · stumps — enquire]'], ['PARKING', '[Parking details to add]'], ['FACILITIES', '[Changing / washroom details]']].map(([key, val], i) => <div className="spec" key={key}><span>0{i + 1}</span><div><small>{key}</small><strong>{val}</strong></div></div>)}</div></section>

      <section className="matches section-pad" id="matches"><div className="section-kicker">04 / WHAT&apos;S ON <span>SAMPLE EVENTS · EDITABLE CONTENT</span></div><div className="matches-head"><h2>THE NEXT GAME<br /><em>STARTS HERE.</em></h2><p>Bring your crew. Find your format.<br />Make some noise.</p></div><div className="event-list">{[['FRIDAY NIGHT LEAGUE', 'FRI / [DATE]', '8-A-SIDE · UNDER LIGHTS', 'A weekly fixture for teams who prefer their cricket after dark.'], ['SUNDAY OPEN NETS', 'SUN / [DATE]', 'ALL FORMATS · OPEN PLAY', 'Drop in, warm up and get more time in the middle.'], ['CORPORATE CUP', '[MONTH] / [DATE]', '10-A-SIDE · TOURNAMENT', 'A proper day out for teams, colleagues and friendly rivals.']].map(([name, dateLabel, format, desc], i) => <article className={`event event-${i + 1}`} key={name}><span className="event-number">0{i + 1}</span><div className="event-info"><small>{dateLabel} <i /> {format}</small><h3>{name}</h3><p>{desc}</p></div><button className="outline-link">ENQUIRE <ArrowUpRight size={15} /></button></article>)}</div></section>

      <section className="pricing section-pad" id="pricing"><div className="section-kicker">05 / RATE BOARD <span>PLACEHOLDER PRICING</span></div><div className="pricing-head"><h2>PICK YOUR<br /><em>PLAY TIME.</em></h2><Button>ASK ABOUT A SLOT</Button></div><div className="rate-table"><div className="rate-row table-head"><span>SESSION</span><span>BEST FOR</span><span>FROM</span></div>{[['OFF-PEAK', 'Weekday mornings & afternoons', '₹___ / HOUR'], ['PEAK', 'Weekday evenings', '₹___ / HOUR'], ['WEEKEND', 'Saturday & Sunday sessions', '₹___ / HOUR']].map(([session, best, price], i) => <div className={`rate-row ${i === 1 ? 'featured' : ''}`} key={session}><span><b>{session}</b>{i === 1 && <small> MOST POPULAR</small>}</span><span>{best}</span><strong>{price}</strong></div>)}</div><p className="fine-print">Rates may vary by duration, day and format. Venue owner to confirm final pricing.</p></section>

      <section className="gallery"><div className="gallery-intro"><span>06 / THE NIGHT, THE LIGHTS, THE GAME</span><h2>EVERY BALL<br /><em>COUNTS.</em></h2></div><div className="gallery-grid"><figure className="gallery-large"><img src="/cricket-huddle.png" alt="Cricket team huddle under floodlights" /><figcaption>UNDER THE LIGHTS</figcaption></figure><figure className="gallery-small"><img src="/cricket-turf.png" alt="Cricket pitch detail at night" /><figcaption>THE CREASE / 22 YARDS</figcaption></figure><div className="gallery-note">NO EMPTY<br /><span>OVERS.</span></div></div></section>

      <section className="location section-pad" id="location"><div className="section-kicker">07 / FIND US <span>MAKE THE VISIT EASY</span></div><div className="location-grid"><div><h2>FIND YOUR<br /><em>HOME GROUND.</em></h2><div className="address"><MapPin size={18} /><div><strong>[TURF ADDRESS]</strong><br /><span>[City, State, PIN]</span></div></div><Button dark>OPEN IN MAPS</Button><div className="contact-lines"><p><small>CALL TO BOOK</small><br /><b>[+91 XXXXX XXXXX]</b> <span>(placeholder)</span></p><p><small>OPENING HOURS</small><br /><b>[Daily · timings to confirm]</b></p><p><small>ENQUIRIES</small><br /><b>[hello@yourturf.in]</b></p></div></div><form className="enquiry-form" onSubmit={(e) => { e.preventDefault(); setEnquirySent(true) }}>{enquirySent ? <div className="form-success"><Check size={30} /><h3>ENQUIRY RECEIVED.</h3><p>This demo form is ready to connect to your enquiry inbox or CRM.</p><button type="button" className="text-link" onClick={() => setEnquirySent(false)}>SEND ANOTHER <ArrowUpRight size={15} /></button></div> : <><div className="form-title"><span>DROP US A LINE</span><small>DEMO ENQUIRY FORM</small></div><div className="input-grid"><label>NAME<input required placeholder="Your name" /></label><label>PHONE<input required placeholder="+91" /></label><label>PREFERRED DATE<input required type="date" /></label><label>PREFERRED TIME<select defaultValue=""><option value="" disabled>Select a time</option><option>Morning</option><option>Afternoon</option><option>Under lights</option></select></label><label>TEAM SIZE<select defaultValue="8-a-side"><option>6-a-side</option><option>8-a-side</option><option>10-a-side</option></select></label><label className="full">MESSAGE<textarea placeholder="Tell us about your game..." /></label></div><button className="club-button" type="submit">SEND ENQUIRY <ArrowUpRight size={15} /></button><p className="fine-print">Demo form — no data is sent until a backend is connected.</p></>}</form></div></section>

      <section className="final-cta"><div className="final-photo" /><div className="final-content"><span>THE WICKET CLUB / MATCH NIGHT</span><h2>YOUR TEAM&apos;S WAITING.<br /><em>THE PITCH IS READY.</em></h2><Button>BOOK YOUR SLOT</Button></div></section>
      <footer><a className="wordmark" href="#top"><Mark /><span>THE WICKET<br /><b>CLUB</b></span></a><div className="footer-links"><a href="#the-turf">The Turf</a><a href="#book-a-slot">Book a Slot</a><a href="#matches">Matches</a><a href="#location">Location</a></div><div className="footer-contact">[hello@yourturf.in]<br />[+91 XXXXX XXXXX]</div><div className="social"><span>IG / WEBSITE CONCEPT BY NPN TECH</span></div></footer>
    </main>
  )
}
