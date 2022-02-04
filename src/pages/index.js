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
    allStrapiProjects: {
      nodes: [{ data: projects }],
    },
    allStrapiBlogs: {
      nodes: [{ data: blogs }],
    },
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
      filter: { data: { elemMatch: { attributes: { isdata: { eq: true } } } } }
    ) {
      nodes {
        data {
          attributes {
            title
            github
            isdata
            desc
            stack
            url
            imgid
            youtube
          }
        }
      }
    }
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
