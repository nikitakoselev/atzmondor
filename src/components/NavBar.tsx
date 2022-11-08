import 'App.css'

export function NavBar (): JSX.Element {
  return (
    <>
      <div className="navbar navbar-expand-sm fixed-top navbar-dark bg-primary text-center">

        <mark>[Dor Atzmon]</mark>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href={'/'} className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href={'/publications'} className="nav-link">
                Publications
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
