export default function TopBar({ dateTime }) {
  const setFontSize = (size) => {
    const map = { small: '12px', normal: '14px', large: '16px' }
    document.body.style.fontSize = map[size]
  }

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <span>Date : <span>{dateTime}</span></span>
        <span>Help Desk: <i className="fa-solid fa-phone"></i> 0755-2660063</span>
        <span><i className="fa-solid fa-envelope"></i> mmvyhelpline[dot]dte[at]mp[dot]gov[dot]in</span>
      </div>
      <div className="top-bar-right">
        <a href="#main-content"><i className="fa-solid fa-bars-staggered"></i> Skip to main content</a> |
        <a href="#"><i className="fa-solid fa-desktop"></i> Screen Reader Access</a> |
        <a href="#"><i className="fa-solid fa-sitemap"></i> Sitemap</a> |
        <a href="#"><i className="fa-solid fa-house"></i> Home</a> |
        <span>
          <button className="accessibility-btn" onClick={() => setFontSize('small')}>A-</button>
          <button className="accessibility-btn" onClick={() => setFontSize('normal')}>A</button>
          <button className="accessibility-btn" onClick={() => setFontSize('large')}>A+</button>
        </span>
        <a href="#" style={{ fontWeight: 'bold' }}>Hindi</a>
      </div>
    </div>
  )
}
