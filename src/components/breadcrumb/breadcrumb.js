import React from "react"
import { Link } from "gatsby"
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight"
import "./breadcrumb.css"

const BreadCrumb = ({ category, postTitle }) => (
  <div className="breadcrumb_container">
    <Link className="breadcrumb_link"to="/">
      <span>На главную</span>
    </Link>
    <FaChevronRight className="breadcrumb_chevron" />
    <Link className="breadcrumb_link" to="/blog">
      <span>Блог</span>
    </Link>
    
    {category ? (
      <>
    <FaChevronRight className="breadcrumb_chevron" />
        <Link className="breadcrumb_link" to="/">
      <span>{category}</span>
        </Link>
      </>
    ) : null}

    
    {postTitle ? (
      <>
    <FaChevronRight className="breadcrumb_chevron" />
        <Link className="breadcrumb_link" to="/">
      <span>{postTitle}</span>
        </Link>
      </>
    ) : null}
  </div>
)

export default BreadCrumb
