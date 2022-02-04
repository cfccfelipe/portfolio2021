import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Navbar from "../components/Navbar"
// ...GatsbyImageSharpFluid

const ProjectsPage = ({ data }) => {
  const {
    allStrapiProjects: {
      nodes: [{ data: projects }],
    },
  } = data
  return (
    <Layout>
      <Navbar />
      <Projects projects={projects} title="All Projects" />
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiProjects {
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
  }
`
export default ProjectsPage
