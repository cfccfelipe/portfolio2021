import React from "react"
import PropTypes from "prop-types"
import {
  FaGithubSquare,
  FaShareSquare,
  FaYoutubeSquare,
  FaStar,
} from "react-icons/fa"
import Image from "gatsby-image"

const Project = ({ project }) => {
  const {
    desc,
    title,
    github,
    stack,
    url,
    img_article,
    youtube,
    short_desc,
    features,
  } = project

  return (
    <article className="project">
      <Image
        fluid={img_article.childImageSharp.fluid}
        className="project-img"
      />

      <div className="project-info">
        <h4>{title}</h4>
        <p>{short_desc}</p>
        <div className="project-stack">
          {stack.map((item, id) => {
            return <span key={id}>{item.stack}</span>
          })}
        </div>
        <div className="project-desc">
          {features.map((item, id) => {
            return (
              <p>
                <FaStar className="project-icon" />
                <span key={id}>{item.feature}</span>
              </p>
            )
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
