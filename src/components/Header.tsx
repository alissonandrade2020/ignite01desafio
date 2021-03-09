import '../styles/header.scss'

import logo from '../../public/logo.svg';

export function Header() {
  return (
    <header className="header">
      <div>
        <img src={logo} alt="to.do"/>
      </div>
    </header>
  )
}