// Apply the saved or system theme before first paint to avoid a light flash.
// Kept as a same-origin file (not inline) so the CSP can use script-src 'self'.
try {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark' || (!saved && matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  }
} catch {}
