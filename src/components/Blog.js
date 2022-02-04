import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
const Blog = ({ blog }) => {
  const {
    id,
    title,
    category,
    content,
    desc,
    linkmedia,
    slug,
    date,
  } = blog.attributes

  return (
    <Link to={"/blogs/${slug}"}>
      <article>
        <img alt="blog" src={linkmedia} className="blog-img" />
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{desc}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

Blog.propTypes = {}

export default Blog
