import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import BreadCrumb from "../components/breadcrumb/breadcrumb"

export default function BlogPost({ data }) {
  const post = data.allWpPost.nodes[0]
  const category = post.categories.nodes[0]
  return (
    <Layout>
      <section className="blog-post">
        <BreadCrumb category={category.name} postTitle={post.title} />
        <h1>{post.title}</h1>
        <span
          style={{
            display: `block`,
            color: `var(--dark-gray)`,
            fontSize: `0.9rem`,
            marginBottom: `1.5rem`,
          }}
        >
          Категория: {category.name}
        </span>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </section>
    </Layout>
  )
}
export const query = graphql`
  query ($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        categories {
          nodes {
            name
            id
          }
        }
      }
    }
    allWpCategory {
      nodes {
        name
        id
      }
    }
  }
`
