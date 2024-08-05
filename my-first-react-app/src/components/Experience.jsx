import { useState } from "react";

export default function Experience() {

  const [isEditing, setIsEditing] = useState(false);

  const [experience, setExperience] = useState([
    {
      header: "Financial Accountant",
      date: "dec. 2017 - present",
      company: "Philips Electronics Eindhoven",
      description:
        "As a Financial Accountant I was responsible for the following:",
      workFunctions: [
        "Salaries",
        "Financial overviews and Revenue rapports",
        "Review and processing of invoices",
        "Customer Care",
      ],
    },
  ]);

  const ExpComponent = () => {


    return (
      <>
        {experience.map((exp, index) => (
          <div key={index}>
            <div className="experience-header">
              <p>{exp.header}</p>
              <p className="experience-date">{exp.date}</p>
            </div>
            <div className="experience-body">
              <p className="experience-title">{exp.company}</p>
              <p className="experience-discription">{exp.description}</p>
              <ul>
                {exp.workFunctions.map((work, index) => (
                  <li key={index}>{work}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </>
    );
  };

  const Input = () => {

    const handleSubmit = (e) => {

      e.preventDefault();


    }

    return (
      <div>
        <form onSubmit={handleSubmit} className="add-exp-container">
          <label htmlFor="position">Position</label>
          <input type="text" name="position"/>
          <label htmlFor="company">Company</label>
          <input type="text" name="company" />
          <label htmlFor="description">Description</label>
          <input type="text" name="description" />
          <label htmlFor="duties">Duties</label>
          <div className="exp-duties">
          <input type="text" name="duties"/>
          <input type="text" name="duties"/>
          <input type="text" name="duties"/>
          <input type="text" name="duties"/>
          <button type="submit"><img className="add-button" src="public/add-button.svg" alt="add button" width="20px" /></button>
          </div>
          </form> 
       </div>
    )
  }

  const ToggleButton = () => {
    return (
      <>
        {isEditing ? (
          <button onClick={() => setIsEditing(false)} className="edit-button">
            <img
              src="public/checkmark.svg"
              width="25px"
              height="25px"
              alt="Checkmark"
            />{" "}
          </button>
        ) : (
          <button className="edit-button" onClick={() => setIsEditing(true)}>
            <svg
              aria-label="edit"
              xmlns="http://www.w3.org/2000/svg"
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none"></rect>
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
              </g>
            </svg>
          </button>
        )}
      </>
    );
  };

  return (
    <div className="experience-container">
      <div className="experience-main-title">
        <p>Work Experience</p>
        <ToggleButton />
      </div>
      <ExpComponent />
      {isEditing && <Input />}
    </div>
  );
}
