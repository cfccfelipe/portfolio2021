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
  } = data

  return (
    <Layout>
      Hero(): JSX.Element
      <Hero />
      <Studies />
      <Jobs />
      <Projects projects={projects} title="Data Projects" showLink />
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiProjects(
      filter: { data: { elemMatch: { attributes: { feature: { eq: true } } } } }
    ) {
      nodes {
        data {
          attributes {
            title
            github
            feature
            desc
            stack
            url
            imgid
            youtube
          }
        }
      }
    }
  }
`
