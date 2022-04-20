import classNames from 'classnames';
import React, { useLayoutEffect, useState } from 'react';

export const DARKMODE_STORAGE_KEY = 'DARKMODE_STORAGE_KEY'
export const MODE = {
  dark: 'dark',
  white: 'white'
}

export function toggleDarkMode(isDarkMode = false) {
  const root = document.documentElement
  
  if (isDarkMode) {
    document.documentElement.classList.add('dark')
    root.classList.add('bg-gray-900')
    root.classList.remove('bg-white')
  } else {
    document.documentElement.classList.remove('dark')
    root.classList.add('bg-white')
    root.classList.remove('bg-gray-900')
  }
  localStorage.setItem(DARKMODE_STORAGE_KEY, isDarkMode ? MODE.dark : MODE.white)
}

const DarkModeSwitch = ({isDarkMode}) => {
  const [isDark, setIsDark] = useState(isDarkMode)

  const wrapperClass = classNames('w-10 rounded-3xl border p-1 transition-all', isDark ? 'border-gray-700 bg-white' : 'border-white bg-gray-700')
  const dotClass = classNames('w-4 h-4 border rounded-full transition-all', isDark ? ' border-gray-700 bg-white' : 'border-white bg-gray-700 translate-x-4')


  const handleDarkModeClick = () => {
    toggleDarkMode(!isDark)
    setIsDark(!isDark)
  }



  return (
    <div className={wrapperClass} onClick={handleDarkModeClick}>
      <div className={dotClass} />
    </div>
  )
}

export default DarkModeSwitch