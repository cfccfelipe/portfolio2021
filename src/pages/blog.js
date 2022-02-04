import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import Navbar from "../components/Navbar"
// ...GatsbyImageSharpFluid

const Blog = ({
  data: {
    allStrapiBlogs: {
      nodes: [{ data: blogs }],
    },
  },
}) => {
  return (
    <Layout>
      <Navbar />
      <section className="Blog-page">
        <Blogs blogs={blogs} title="blog" />
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiBlogs(sort: { order: DESC, fields: data___attributes___date }) {
      nodes {
        data {
          attributes {
            category
            content
            desc
            linkmedia
            slug
            title
            date(formatString: "MMM Do, YYYY")
          }
          id
        }
      }
    }
  }
`
export default Blog
