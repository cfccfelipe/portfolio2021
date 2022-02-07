import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import Navbar from "../components/Navbar"

const Blog = ({ data }) => {
  const {
    allStrapiBlogs: { nodes: blogs },
  } = data
  return (
    <Layout>
      <section className="Blog-page">
        <Blogs blogs={blogs} title="blog" />
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiBlogs(sort: { order: DESC, fields: date }) {
      nodes {
        title
        content
        id
        short_desc
        date(formatString: "MMMM DD, YYYY")
        slug
        categories {
          category
        }
        imgp {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default Blog
