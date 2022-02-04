import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: { fields: id, order: DESC }) {
      nodes {
        data {
          attributes {
            company
            position
            date
            desc
          }
        }
      }
    }
  }
`
const Jobs = () => {
  const d = useStaticQuery(query)
  const {
    allStrapiJobs: {
      nodes: [{ data: jobs }],
    },
  } = d

  const [value, setValue] = React.useState(0)
  const { attributes } = jobs[value]
  const { company, position, date, desc } = attributes
  const list_desc = desc.split("-")
  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.attributes.company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          <div className="job-desc">
            {list_desc.map(a => {
              return (
                <p>
                  <FaAngleDoubleRight className="job-icon" />
                  {a}
                </p>
              )
            })}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Jobs
