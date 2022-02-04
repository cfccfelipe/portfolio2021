import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import projects1 from "../assets/projects-4.jpg"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({ project }) => {
  const {
    desc,
    title,
    github,
    feature,
    stack,
    url,
    imgid,
    youtube,
  } = project.attributes
  return (
    <article className="porject">
      {/* <Image fluid={projects1} className="project-img" /> */}
      <div className="project-info">
        <h3>{title}</h3>
        <p className="project-desc">{desc}</p>
        <div className="project-stack">{stack}</div>
        <div className="porject-links">
          <a href={github}>
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {}

export default Project
