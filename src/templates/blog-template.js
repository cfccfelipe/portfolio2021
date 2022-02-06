import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"

const ComponentName = ({ data }) => {
  const { categories, content, date } = data.blog

  return (
    <Layout>
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown source={content} />
          </article>
          <div className="blog-card">
            <div className="blog-footer">
              <div>Publish {date}</div>
              {categories.map((category, index) => {
                return <div>{category.category}</div>
              })}
            </div>
          </div>
          <Link to="/blog" className="btn center-btn">
            return
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      date(formatString: "MMMM DD, YYYY")
      categories {
        category
      }
    }
  }
`

export default ComponentName
