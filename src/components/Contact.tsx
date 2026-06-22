import { useState, type CSSProperties } from 'react'
import { ArrowRight } from '../theme'

const field: CSSProperties = {
  width: '100%',
  padding: '14px 16px',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  borderRadius: 12,
  fontSize: 15,
  fontFamily: 'inherit',
  background: 'rgba(255, 255, 255, 0.05)',
  color: '#ffffff',
  outline: 'none',
}
const label: CSSProperties = { fontSize: 13, fontWeight: 600, color: '#9aa0bb' }
const fieldGroup: CSSProperties = { display: 'flex', flexDirection: 'column', gap: 8 }
const socialLink: CSSProperties = { fontSize: 15, fontWeight: 500, color: '#a5a8be', textDecoration: 'none', transition: 'color 0.2s ease' }
const errorStyle: CSSProperties = { fontSize: 12, color: '#ff6b6b', fontWeight: 500, marginTop: 4 }

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({ name: '', email: '', message: '' })
  const [touched, setTouched] = useState({ name: false, email: false, message: false })
  const [isSent, setIsSent] = useState(false)
  const [toast, setToast] = useState<{ message: string; leaving: boolean } | null>(null)

  const validateField = (fieldName: 'name' | 'email' | 'message', value: string) => {
    let errorMsg = ''
    if (fieldName === 'name') {
      if (!value.trim()) {
        errorMsg = 'Name is required'
      } else if (value.trim().length < 2) {
        errorMsg = 'Name must be at least 2 characters'
      }
    } else if (fieldName === 'email') {
      if (!value.trim()) {
        errorMsg = 'Email is required'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errorMsg = 'Please enter a valid email address'
      }
    } else if (fieldName === 'message') {
      if (!value.trim()) {
        errorMsg = 'Message is required'
      } else if (value.trim().length < 10) {
        errorMsg = 'Message must be at least 10 characters'
      }
    }
    setErrors(prev => ({ ...prev, [fieldName]: errorMsg }))
    return errorMsg === ''
  }

  const handleChange = (fieldName: 'name' | 'email' | 'message', value: string) => {
    setForm(prev => ({ ...prev, [fieldName]: value }))
    if (touched[fieldName]) {
      validateField(fieldName, value)
    }
  }

  const handleBlur = (fieldName: 'name' | 'email' | 'message') => {
    setTouched(prev => ({ ...prev, [fieldName]: true }))
    validateField(fieldName, form[fieldName])
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const isNameValid = validateField('name', form.name)
    const isEmailValid = validateField('email', form.email)
    const isMsgValid = validateField('message', form.message)

    setTouched({ name: true, email: true, message: true })

    if (isNameValid && isEmailValid && isMsgValid) {
      setIsSent(true)

      // Wire this up to email mailto trigger
      const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
      const body = encodeURIComponent(`${form.message}\n\n- ${form.name} (${form.email})`)
      
      // Trigger toast
      setToast({ message: 'Form submitted successfully!', leaving: false })

      // Clear Form state
      setForm({ name: '', email: '', message: '' })
      setTouched({ name: false, email: false, message: false })

      // Set timeout for toast dismissal
      setTimeout(() => {
        setToast(prev => prev ? { ...prev, leaving: true } : null)
        setTimeout(() => setToast(null), 300)
      }, 4000)

      // Redirect client to mail client
      window.location.href = `mailto:gomilo2000@gmail.com?subject=${subject}&body=${body}`

      // Reset button state
      setTimeout(() => {
        setIsSent(false)
      }, 3500)
    }
  }

  const getFieldStyle = (fieldName: 'name' | 'email' | 'message') => {
    const hasError = touched[fieldName] && errors[fieldName]
    return {
      ...field,
      borderColor: hasError ? '#ff6b6b' : 'rgba(255, 255, 255, 0.12)',
      boxShadow: hasError ? '0 0 0 4px rgba(255, 107, 107, 0.18)' : undefined,
      transition: 'all 0.2s ease',
    }
  }

  return (
    <section
      id="contact"
      className="grid-2 galaxy-bg"
      style={{
        scrollMarginTop: 90,
        padding: '90px 48px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 56,
        alignItems: 'start',
        position: 'relative',
      }}
    >
      {/* Galaxy nebulae glows */}
      <div className="galaxy-glow-1" />
      <div className="galaxy-glow-2" />

      {/* Toast Notification Mount */}
      {toast && (
        <div className="toast-container">
          <div className={`toast-card ${toast.leaving ? 'leaving' : ''}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#10b981' }}>
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>{toast.message}</span>
          </div>
        </div>
      )}

      <div style={{ position: 'relative', zIndex: 2 }}>
        <p style={{ margin: '0 0 14px', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)' }}>Contact</p>
        <h2 style={{ margin: 0, fontSize: 'clamp(30px,3.4vw,44px)', fontWeight: 700, letterSpacing: '-.025em', color: '#ffffff', lineHeight: 1.06 }}>Let&apos;s build something great.</h2>
        <p style={{ margin: '22px 0 0', fontSize: 18, lineHeight: 1.6, color: '#a5a8be', maxWidth: 420 }}>
          Looking for my first developer role and open to frontend, mobile or fullstack opportunities. Feel free to reach out, I&apos;d love to hear from you.
        </p>
        <a href="mailto:gomilo2000@gmail.com" className="link-soft" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 28, fontSize: 18, fontWeight: 600, color: '#ffffff', textDecoration: 'none' }}>
          gomilo2000@gmail.com
        </a>
        <div style={{ display: 'flex', gap: 22, marginTop: 24 }}>
          <a href="https://github.com/gomilo2000" target="_blank" rel="noopener noreferrer" className="link-soft" style={socialLink}>GitHub</a>
          <a href="https://www.linkedin.com/in/goran-milosevic-849344229/" target="_blank" rel="noopener noreferrer" className="link-soft" style={socialLink}>LinkedIn</a>
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          background: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 20,
          padding: 32,
          boxShadow: '0 24px 50px -32px rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={fieldGroup}>
            <label style={label}>Name</label>
            <input
              className="field"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => handleChange('name', e.target.value)}
              onBlur={() => handleBlur('name')}
              style={getFieldStyle('name')}
            />
            {touched.name && errors.name && <div style={errorStyle}>{errors.name}</div>}
          </div>
          <div style={fieldGroup}>
            <label style={label}>Email</label>
            <input
              className="field"
              type="email"
              placeholder="you@email.com"
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              onBlur={() => handleBlur('email')}
              style={getFieldStyle('email')}
            />
            {touched.email && errors.email && <div style={errorStyle}>{errors.email}</div>}
          </div>
          <div style={fieldGroup}>
            <label style={label}>Message</label>
            <textarea
              className="field"
              rows={4}
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={(e) => handleChange('message', e.target.value)}
              onBlur={() => handleBlur('message')}
              style={{ ...getFieldStyle('message'), resize: 'vertical' }}
            />
            {touched.message && errors.message && <div style={errorStyle}>{errors.message}</div>}
          </div>
          <button
            type="submit"
            disabled={isSent}
            className="btn-dark"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              background: isSent ? '#10b981' : '#ffffff',
              color: isSent ? '#ffffff' : '#111418',
              fontSize: 16,
              fontWeight: 600,
              fontFamily: 'inherit',
              padding: '16px 26px',
              border: 'none',
              borderRadius: 14,
              cursor: isSent ? 'default' : 'pointer',
              boxShadow: isSent ? '0 12px 28px -12px rgba(16,185,129,.5)' : '0 12px 28px -12px rgba(0,0,0,.35)',
              transform: isSent ? 'scale(1.02)' : undefined,
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            {isSent ? (
              <>
                Message Sent!
                <CheckIcon />
              </>
            ) : (
              <>
                Send message
                <ArrowRight />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}
