import * as React from "react"
import { Link } from "gatsby"
import { FaTelegram } from "@react-icons/all-files/fa/FaTelegram"
import { FaVk } from "@react-icons/all-files/fa/FaVk"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import "./footer.css"

const Footer = () => {
  return (
    <footer className="grid-container">
      <div className="footer_copyright">
        © {new Date().getFullYear()} &middot; Елена Трифонова
      </div>
      <div className="footer_social-list">
        <ul>
          <li>
            <a
              href="https://web.telegram.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram className="footer_icon" />
            </a>
          </li>
          <li>
            <a href="https://vk.com/" target="_blank" rel="noopener noreferrer">
              <FaVk className="footer_icon" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="footer_icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
