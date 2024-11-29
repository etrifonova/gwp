import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BreadCrumb from "../components/breadcrumb/breadcrumb"
import Sidebar from "../components/sidebar/sidebar"

export default function Blog({ data }) {
  const category = data.allWpPost.nodes.map(node => (
    <div key={node.slug}>{node.categories.nodes.map(node => node.name)}</div>
  ))
  return (
    <Layout>
      <SEO title="blog" />
      <section className="blog_container">
        <BreadCrumb className="blog_breadcrumb" />
        <Sidebar className="blog_sidebar" category={category} />
        <div className="blog_posts">
          <h1>КАТЕГОРИИ</h1>
          <h4>Посты</h4>
          {data.allWpPost.nodes.map(node => (
            <div key={node.slug}>
              <Link to={node.slug}>
                <p>{node.title}</p>
              </Link>
              <p>Категория: {node.categories.nodes.map(node => node.name)}</p>
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          ))}
        </div>
      </section>
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
