import React from 'react'

import { RouterProvider } from 'react-router-dom'
import 'App.css'

import { NavBar } from 'components/NavBar'

import 'css/bootstrap.css'
import { router } from 'routes'

declare global {
  interface Window {
    _386: any
  }
}
export default class App extends React.Component<{}, {}> {
  componentDidMount (): void {
    window.addEventListener('load', () => {
      window._386.magicCursor()
      window._386.scrollLock()
    })
  }

  render (): React.ReactNode {
    return (
      <div>
        <div className="App bootstra-enable-cursor container col-md-8 col-sm-11 text-left"
        style={{ marginTop: '30px' }}>
          <NavBar />
          <RouterProvider router={router} />
          <footer className='fixed-bottom'>
            <p className="text-center">© 1990 - {(new Date()).getFullYear()}</p>
          </footer>
        </div>
      </div>
    )
  }
}
