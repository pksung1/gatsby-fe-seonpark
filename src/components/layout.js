import React, {useLayoutEffect, useMemo} from "react"
import { Link } from "gatsby"
import classnames from 'classnames'
import Menu from './Menu'
import {toggleDarkMode, DARKMODE_STORAGE_KEY, MODE} from './DarkModeSwitch'


const isBrowser = typeof window !== "undefined"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  const rootClasses = classnames('flex-1 overflow-hidden relative', {'pt-12': !isRootPath})
  const isDarkMode = useMemo(() => isBrowser ? localStorage.getItem(DARKMODE_STORAGE_KEY) === MODE.dark : false, [])

  useLayoutEffect(() => {
    toggleDarkMode(isDarkMode)
    return () => {
      console.log('clean darkmode')
    }
  }, [])

  return (
    <div data-is-root-path={isRootPath}>
      <header className="shadow-md w-full h-12 items-center z-20 fixed bg-white dark:bg-gray-900 dark:shadow-gray-400 transition-colors">
        <div className="flex flex-row justify-between px-4 py-2">
          <h1 className="text-xl font-title dark:text-white">
            <Link to="/">{title}</Link>
          </h1>
          <Menu isDarkMode={isDarkMode}/>
        </div>
      </header>
      <main className="flex flex-column dark:bg-gray-900">
        <section className="flex"></section>
        <section className={rootClasses}>{children}</section>
      </main>
      <footer></footer>
    </div>
  )
}

export default Layout
