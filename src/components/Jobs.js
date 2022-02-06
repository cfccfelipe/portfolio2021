import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: { order: DESC, fields: id }) {
      nodes {
        company
        position
        date
        desc {
          id
          desc_option
        }
      }
    }
  }
`
const Jobs = () => {
  const d = useStaticQuery(query)
  const {
    allStrapiJobs: { nodes: jobs },
  } = d

  const [value, setValue] = React.useState(0)
  const { company, position, date, desc } = jobs[value]
  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.position}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(a => {
            return (
              <p key={a.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                {a.desc_option}
              </p>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default Jobs
