import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import About from "../components/about/about"

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { eq: "about.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            quality: 80
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  const heroImage = getImage(data.file.childImageSharp.gatsbyImageData)
  return (
    <Layout>
      <Seo title="about" />
      <About />

    </Layout>
  )
}
