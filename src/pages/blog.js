import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BreadCrumb from "../components/breadcrumb/breadcrumb"
import Sidebar from "../components/sidebar/sidebar"

export default function Blog({ data }) {
  const posts = data.allWpPost.nodes

  // State to track selected category and current page
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)


  // Collect all categories across posts
  const allCategories = posts.flatMap(post =>
    post.categories.nodes.map(category => category.name)
  );

  // Filter unique categories using Set
  const uniqueCategories = [...new Set(allCategories)];

  // Function to handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
    setCurrentPage(1); // Reset to the first page when selecting a new category
  };

   // Function to reset the filter
  const resetFilter = () => {
    setSelectedCategory(null); // Reset to show all posts
  };

  // Filter posts by selected category
  const filteredPosts = selectedCategory
    ? posts.filter(post =>
        post.categories.nodes.some(category => category.name === selectedCategory)
      )
    : posts; // Show all posts if no category is selected


  // Constants for pagination
  const postsPerPage = 5
  // Calculate total pages based on the filtered posts
const totalPosts = filteredPosts.length
const totalPages = Math.ceil(totalPosts / postsPerPage)

  // Calculate start and end index for posts based on current page
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage

  // Get posts to display based on pagination
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex)

// Scroll to bottom function
const scrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
};

// Updated pagination handlers
const nextPage = () => {
  setCurrentPage(prev => {
    const newPage = Math.min(prev + 1, totalPages);
    if (newPage !== prev) scrollToBottom();
    return newPage;
  });
};

const prevPage = () => {
  setCurrentPage(prev => {
    const newPage = Math.max(prev - 1, 1);
    if (newPage !== prev) scrollToBottom();
    return newPage;
  });
};

  const category = (
    <ul className="category_list">
      {uniqueCategories.map((category, index) => (
        <li key={index}>
          <button
            onClick={() => handleCategoryClick(category)}
            className={selectedCategory === category ? 'active category_btn' : 'category_btn'}
          >
            {category}
          </button>
        </li>
      ))}
      <button className="category_btn" onClick={resetFilter}>Сбросить фильтр</button>
    </ul>
  );

  // Function to limit excerpt length and add link
  const getLimitedExcerpt = (htmlString, charLimit, slug) => {
    // Remove HTML tags
    const textOnly = htmlString.replace(/<[^>]+>/g, '');
    // Truncate to specified length and add link if truncated
    if (textOnly.length > charLimit) {
      return (
        <>
          {textOnly.substring(0, charLimit)}
          <Link to={`/blog/${slug}`} className="read-more"> [...]</Link>
        </>
      );
    }
    return textOnly;
  };

  return (
    <Layout>
      <SEO title="blog" />
      <section className="blog">
        <BreadCrumb className="blog__breadcrumb" />
        <Sidebar className="blog_sidebar" category={category} />
        <div className="blog_posts">
          <h1>Блог</h1>
          <h4>{selectedCategory ? `Посты в категории "${selectedCategory}"` : 'Все посты'}</h4>

          {paginatedPosts.length > 0 ? paginatedPosts.map(post => (
            <div key={post.slug}>
              <Link to={post.slug}>
                <p>{post.title}</p>
              </Link>
              <p className="post_category" >Категория: {post.categories.nodes.map(category => category.name).join(", ")}</p>
              <p>{getLimitedExcerpt(post.excerpt, 200, post.slug)}</p>
            </div>
          )) : <p className="post_category">Постов не найдено.</p>}

          {/* Pagination controls */}
          <div className="pagination">
            {currentPage > 0 && (
              <button className="pagination-btn" onClick={prevPage} disabled={currentPage === 1}>&#8592;</button>
            )}
            <span>Страница {currentPage} из {totalPages}</span>
            {currentPage <= totalPages && (
              <button className="pagination-btn" onClick={nextPage} disabled={currentPage === totalPages}>&#8594;</button>
            )}
          </div>
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
