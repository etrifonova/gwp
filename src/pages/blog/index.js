import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

export default function Blog({ data }) {
  //highlight-line
  return (
    <Layout>
      <SEO title="blog" />
      <h1>Мой блог на WordPress</h1>
      {console.log(data)}
      <h4>Посты</h4>
      {data.allWpPost.nodes.map(node => (
        <div key={node.slug}>
          <Link to={node.slug}>
            <p>{node.title}</p>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
    </Layout>
  )
}

//highlight-start
export const pageQuery = graphql`
query {
  allWpPost(sort: {date: DESC}) {
    nodes {
      title
      excerpt
      slug
    }
  }
}
`
//highlight-end