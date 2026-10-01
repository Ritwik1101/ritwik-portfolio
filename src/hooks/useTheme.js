import { useCallback, useEffect, useState } from 'react'

function readTheme() {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState(readTheme)

  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = theme
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#09090b' : '#fafafa')
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Storage can be unavailable (private mode); the theme still applies for this visit.
    }
  }, [theme])

  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), [])

  return { theme, toggle }
}
