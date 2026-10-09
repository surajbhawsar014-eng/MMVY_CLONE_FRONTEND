import { CATEGORIES, INSTRUCTIONS, NAV_CARDS } from '../data'
import { handleRedirect } from '../utils'

export default function MainContent({ date }) {
  return (
    <div className="main-container" id="main-content">
      <div className="portal-title">Welcome to MMVY Portal</div>

      <div className="content-card">
        <button className="btn-green-banner" onClick={() => handleRedirect('Dashboard', 'https://mptasc.mp.gov.in/dashboard')}>
          DASHBOARD - <span>{date}</span>
        </button>

        <button className="btn-green-banner" onClick={() => handleRedirect('View Applications', 'https://mptasc.mp.gov.in/applications')}>
          View Applications by Institute Type <span>{date}</span>
        </button>

        <div className="category-grid">
          {CATEGORIES.map((name) => (
            <button key={name} className="btn-category" onClick={() => alert('Filtering applications for: ' + name)}>
              {name}
            </button>
          ))}
        </div>

        <div className="instructions-box">
          <button className="btn-green-banner" style={{ marginBottom: 5, cursor: 'default' }}>
            Instructions for Paper-less Process for sanction &amp; e-Payment of MMVY Applications
          </button>
          {INSTRUCTIONS.map((text, i) => (
            <div className="instruction-item" key={i}>
              <span className="speaker-icon"><i className="fa-solid fa-bullhorn"></i></span>
              <div>{text}</div>
            </div>
          ))}
        </div>

        <div className="nav-grid">
          {NAV_CARDS.map((card) => (
            <button key={card.title} className="nav-card-btn" onClick={() => handleRedirect(card.title, card.url)}>
              <div className="nav-card-icon"><i className={`fa-solid ${card.icon}`}></i></div>
              <div className="nav-card-text">{card.text}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
