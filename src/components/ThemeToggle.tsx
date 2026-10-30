import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  const toggle = () => {
    const next = !dark
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {
      // Storage can be unavailable (private mode); the choice still applies for this visit.
    }
    setDark(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={`cursor-pointer rounded-full p-2 text-muted transition-colors hover:bg-subtle hover:text-ink ${className}`}
      title={dark ? 'เปลี่ยนเป็นโหมดสว่าง' : 'เปลี่ยนเป็นโหมดมืด'}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}
