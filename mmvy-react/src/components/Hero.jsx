import { HERO_BG } from '../data'
import { handleRedirect } from '../utils'

export default function Hero() {
  const bg = `linear-gradient(rgba(20, 30, 20, 0.35), rgba(20, 30, 20, 0.45)), url('${HERO_BG}')`

  return (
    <div className="hero-section" style={{ backgroundImage: bg }}>
      <div className="hero-overlay">
        <div className="hero-title">मुख्यमंत्री मेधावी विद्यार्थी योजना पोर्टल</div>
        <div className="hero-subtitle">
          मध्य प्रदेश सरकार का सभी वर्ग के मेधावी विद्यार्थिओं की सहायतार्थ एक समग्र प्रयास
        </div>
        <div className="hero-link" onClick={() => handleRedirect('About Scheme', 'https://mptasc.mp.gov.in')}>
          योजना के बारे में और अधिक जानें
        </div>
      </div>
    </div>
  )
}
