import * as React from "react"
import { Link } from "gatsby"
import Logo from "../../assets/svg/logo.svg"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header className="grid-container">
    <Link className="header_logo" to="/">
      <Logo
        style={{
          width: `50%`,
        }}
      />
    </Link>
    <nav>
      <ul className="nav_list">
        <li>
          <Link className="nav-link" to="/about">
            Обо мне
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/blog">
            Блог
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
