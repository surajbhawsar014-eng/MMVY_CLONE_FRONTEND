import { useState } from 'react'
import useClock from './hooks/useClock'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Hero from './components/Hero'
import MainContent from './components/MainContent'
import NoticeModal from './components/NoticeModal'
import Footer from './components/Footer'

export default function App() {
  const { date, dateTime } = useClock()
  const [showModal, setShowModal] = useState(true)

  return (
    <>
      <TopBar dateTime={dateTime} />
      <Header />
      <Hero />
      <MainContent date={date} />
      {showModal && <NoticeModal onClose={() => setShowModal(false)} />}

      <div className="fab-btn" onClick={() => alert('Accessibility / Help Desk Assistant Loaded')} title="Help Assistant">
        <i className="fa-solid fa-child-reaching"></i>
      </div>

      <Footer />
    </>
  )
}
