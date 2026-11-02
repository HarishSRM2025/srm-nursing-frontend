import { useEffect, useRef, useState } from 'react'
import { MessageCircle, Minus } from 'lucide-react'
import '../../Styles/chatbot.css'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasOpened, setHasOpened] = useState(false)
  const launcherRef = useRef(null)
  const minimizeRef = useRef(null)

  const minimize = () => {
    setIsOpen(false)
    launcherRef.current?.focus()
  }

  useEffect(() => {
    if (!isOpen) return
    minimizeRef.current?.focus()
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        launcherRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  return (
    <div className="srm-chatbot">
      <div
        id="srm-chatbot-panel"
        className="srm-chatbot__panel"
        role="region"
        aria-label="SRM AI assistant"
        hidden={!isOpen}
      >
        <div className="srm-chatbot__header">
          <span>SRM AI assistant</span>
          <div className="srm-chatbot__actions">
            <button ref={minimizeRef} type="button" onClick={minimize} aria-label="Minimize chat" title="Minimize chat">
              <Minus size={22} aria-hidden="true" />
            </button>
          </div>
        </div>
        {hasOpened && (
          <iframe
            src="https://srm-chatbots-web.vercel.app/widget/4"
            title="SRM AI assistant"
            width="380"
            height="600"
            loading="lazy"
            className="srm-chatbot__frame"
          />
        )}
      </div>
      <button
        ref={launcherRef}
        type="button"
        className="srm-chatbot__launcher"
        aria-label={isOpen ? 'Minimize SRM AI assistant' : 'Open SRM AI assistant'}
        aria-expanded={isOpen}
        aria-controls="srm-chatbot-panel"
        title={isOpen ? 'Minimize chat' : 'Chat with SRM AI assistant'}
        onClick={() => {
          if (isOpen) minimize()
          else {
            setHasOpened(true)
            setIsOpen(true)
          }
        }}
      >
        {isOpen ? <Minus size={28} aria-hidden="true" /> : <MessageCircle size={28} aria-hidden="true" />}
      </button>
    </div>
  )
}
