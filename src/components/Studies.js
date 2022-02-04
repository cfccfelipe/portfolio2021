import React from "react"
import Title from "./Title"
import studies from "../constants/studies"
const Studies = () => {
  return (
    <section className="section bg-grey">
      <Title title="Studies" />
      <div className="section-center services-center">
        {studies.map(study => {
          const { id, icon, title, text, un } = study
          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
              <p>{un}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Studies
