import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Studies from "../components/Studies"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data
  return (
    <Layout>
      <Hero />
      <Studies />
      <Jobs />
      <Projects projects={projects} title="Data Projects" showLink />
      <Blogs blogs={blogs} title="Lastest Article" showLink />
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiProjects(
      filter: { isdata: { eq: true } }
      limit: 2
      sort: { order: DESC, fields: id }
    ) {
      nodes {
        title
        github
        isdata
        url
        youtube
        short_desc
        img_article {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          stack
          id
        }
        features {
          feature
          id
        }
      }
    }
    allStrapiBlogs(sort: { order: DESC, fields: date }, limit: 3) {
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
