import { NOTICES } from '../data'

export default function NoticeModal({ onClose }) {
  return (
    // clicking the dark overlay (outside the box) closes the modal
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-container">
        <div className="modal-header">
          <span>महत्वपूर्ण सूचनाएँ - MMVY</span>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          {NOTICES.map((n, i) => (
            <div className="modal-list-item" key={i}>
              <i className="fa-solid fa-circle-arrow-right"></i>
              <div>
                {n.helpline ? (
                  <>
                    किसी प्रकार की समस्या होने पर योजना की हेल्पलाइन{' '}
                    <strong>mmvyhelpline.dte@mp.gov.in</strong> पर दिनांक 15.08.2026 तक संपर्क/सूचित करें।
                  </>
                ) : n.red ? (
                  <span className="highlight-red">{n.text}</span>
                ) : (
                  n.text
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
