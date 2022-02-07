import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Navbar from "../components/Navbar"

const ProjectsPage = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data
  return (
    <Layout>
      <Projects projects={projects} title=" Projects" />
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiProjects(sort: { order: DESC, fields: id }) {
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
  }
`

export default ProjectsPage
