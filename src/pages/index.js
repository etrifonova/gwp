import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero/hero"

export default function Home({ data }) {
  const posts = data.allWpPost.nodes

  // Function to limit excerpt length and add link
  const getLimitedExcerpt = (htmlString, charLimit, slug) => {
    // Remove HTML tags
    const textOnly = htmlString.replace(/<[^>]+>/g, "")
    // Truncate to specified length and add link if truncated
    if (textOnly.length > charLimit) {
      return (
        <>
          {textOnly.substring(0, charLimit)}
          <Link to={`/blog/${slug}`} className="read-more">
            {" "}
            [...]
          </Link>
        </>
      )
    }
    return textOnly
  }

  return (
    <Layout>
      <Seo title="home" />
      <Hero />
      <div className="latestBlogPosts_container">
        <h1>Блог</h1>
        <div className="latestBlogPosts_posts">
          {posts.slice(0, 3).map((post, index) => (
            <div key={index}>
              <h4>{post.title}</h4>

              <p>{getLimitedExcerpt(post.excerpt, 200, post.slug)}</p>
              {console.log(post.slug)}
              <Link to={`/blog/${post.slug}`}>
                <p>Читать</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogPostsQuery {
    allWpPost(sort: { date: DESC }) {
      nodes {
        title
        excerpt
        content
        slug
        categories {
          nodes {
            name
            id
          }
        }
      }
    }
  }
`
