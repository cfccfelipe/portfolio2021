import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Blog = ({ id, title, categories, short_desc, imgp, slug, date }) => {
  console.log(imgp)
  return (
    <Link to={`/blogs/${slug}`} className="blog" key={id}>
      <article>
        <Image fluid={imgp.childImageSharp.fluid} className="blog-img" />
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{short_desc}</p>
          <div className="blog-footer">
            <div>
              {categories.map(category => {
                return <p key={category.id}>{category.category}</p>
              })}
            </div>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

Blog.propTypes = {}

export default Blog
