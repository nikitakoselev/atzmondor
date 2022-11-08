import { createBrowserRouter } from 'react-router-dom'

import { Home } from 'components/Home'
import { Error } from 'routes/error'
import { Publications } from 'components/Publications'
import { Publication } from 'model'

declare global {
  interface Window {
    _386: any
  }
}

const publications: Publication[] = []

export const router = createBrowserRouter([
  {
    path: '/*',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/publications',
    element: <Publications publications={publications} />
  }
])
