import { useState } from 'react'
import { LOGO, NAV_ITEMS } from '../data'
import { handleRedirect } from '../utils'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)      // mobile hamburger
  const [openSub, setOpenSub] = useState(null)         // mobile dropdown index

  const toggleSubMenu = (e, index) => {
    e.preventDefault()
    if (window.innerWidth <= 900) {
      setOpenSub(openSub === index ? null : index)
    }
  }

  return (
    <header className="main-header">
      <div className="logo-container">
        <img src={LOGO} alt="Medhavi Kalyan Logo" style={{ height: 55, width: 'auto' }} />
      </div>

      <nav className={`main-nav ${menuOpen ? 'active' : ''}`} id="mainNav">
        {NAV_ITEMS.map((item, i) => {
          if (item.type === 'dropdown') {
            return (
              <div key={item.label} className={`nav-item dropdown ${openSub === i ? 'open' : ''}`}>
                <a href="#" onClick={(e) => toggleSubMenu(e, i)}>
                  <i className={`fa-solid ${item.icon}`}></i> {item.label}{' '}
                  <i className="fa-solid fa-caret-down"></i>
                </a>
                <div className="dropdown-content">
                  {item.children.map((c) => (
                    <a key={c.label} href="#" onClick={(e) => { e.preventDefault(); handleRedirect(c.label, c.url) }}>
                      {c.label}
                    </a>
                  ))}
                </div>
              </div>
            )
          }
          return (
            <div key={item.label} className="nav-item">
              <a
                href="#"
                className={item.type === 'faq' ? 'faq-btn' : undefined}
                onClick={(e) => { e.preventDefault(); handleRedirect(item.label, item.url) }}
              >
                <i className={`fa-solid ${item.icon}`}></i> {item.label}
              </a>
            </div>
          )
        })}

        <a
          href="#"
          className="btn-mmjky"
          onClick={(e) => { e.preventDefault(); handleRedirect('MMJKY Portal', 'https://mmjky.mp.gov.in') }}
        >
          Go to MMJKY PORTAL
        </a>
      </nav>

      <div className="hamburger-menu" onClick={() => setMenuOpen((v) => !v)} title="Toggle Menu">
        <i className="fa-solid fa-bars"></i>
      </div>
    </header>
  )
}
