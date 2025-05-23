'use client'

import { useEffect } from 'react'

export default function ThemeProvider({ children }) {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
    } else if (savedTheme === 'light') {
      document.body.classList.remove('dark-theme');
    }
  }, []);

  return children;
}