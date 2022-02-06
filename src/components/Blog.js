import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Blog = ({ id, title, categories, short_desc, imgp, slug, date }) => {
  return (
    <Link to={`/blog/${slug}`} className="blog" key={id}>
      <article>
        {imgp && (
          <Image fluid={imgp.childImageSharp.fluid} className="blog-img" />
        )}
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

Blog.propTypes = {
  title: PropTypes.string,
  short_desc: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.String,
  imgp: PropTypes.object,
  slug: PropTypes.string,
  short_desc: PropTypes.string,
  date: PropTypes.string,
}

export default Blog
