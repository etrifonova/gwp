import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/header"
import Footer from "./footer/footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className="page-container">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className="grid-container">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
