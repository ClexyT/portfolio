import { useEffect, useState } from 'react'
const DarkButton = () => {
  const [theme, setTheme] = useState(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      return 'dark'
    }
    return 'light'
  })
  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])
  const handleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <div>
      <button
        onClick={handleTheme}
        className='text-[30px] mt-6 m-5 hover:scale-110 hover:text-blue-800 dark:hover:text-blue-300 transition-all !sm:mr-10 rotate-45 bg-transparent border-none !sm:mr-10 '
      >
        {theme === 'light' ? '🌣' : '☽'}

      </button>
    </div>
  )
}

export default DarkButton
