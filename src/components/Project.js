import React from "react"
import PropTypes from "prop-types"
import { FaGithubSquare, FaShareSquare, FaYoutubeSquare } from "react-icons/fa"

const Project = ({ project }) => {
  const {
    desc,
    title,
    github,
    stack,
    url,
    imgid,
    youtube,
    isdata,
  } = project.attributes
  const stack_list = stack.split("-")

  return (
    <article className="project">
      <img className="project-img" src={imgid} alt="project" />

      <div className="project-info">
        <h4>{title}</h4>
        <p>{desc}</p>
        <div className="project-stack">
          {stack_list.map((item, id) => {
            return <span key={id}>{item}</span>
          })}
        </div>
        <div className="porject-links">
          {github && (
            <a href={github}>
              <FaGithubSquare className="project-icon" />
            </a>
          )}
          {youtube && (
            <a href={youtube}>
              <FaYoutubeSquare className="project-icon" />
            </a>
          )}
          {url && (
            <a href={url}>
              <FaShareSquare className="project-icon" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {}

export default Project
