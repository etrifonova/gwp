import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./hero.css"

const Hero = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { eq: "hero.jpg" }) {
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
        <div className="grid-container hero" id="home">
            <div className="hero__content">
                <h1>{data.site.siteMetadata?.title}</h1>
                <p>
                    Меня зовут Елена, и я профессиональный преподаватель английского с
                    опытом 14 лет и начинающий веб-разработчик. Провожу занятия онлайн с
                    использованием удобных и современных технологий.
                </p>

                <div className="website__header-content_about-link">
                  <Link to="/about">Подробнее обо мне</Link>
                </div>
                {/* <div className="website__header-button">
          <CtaButton />
        </div> */}
            </div>

            <div className="hero__image">
                <GatsbyImage image={heroImage} alt="Hero Image" />
            </div>
        </div>
    )
}

export default Hero
