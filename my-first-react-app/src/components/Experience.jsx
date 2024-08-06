import { useState } from "react";

export default function Experience() {

  const [isEditing, setIsEditing] = useState(false);

  const [experience, setExperience] = useState([
    {
      position: "Financial Accountant",
      date: "dec. 2017 - present",
      company: "Philips Electronics Eindhoven",
      description:
        "As a Financial Accountant I was responsible for the following:",
      dutiesOne: "Salaries",
      dutiesTwo: "Financial overviews and Revenue rapports",
      dutiesThree: "Review and processing of invoices",
    },
  ]);

  const ExpComponent = () => {

    const handleDelete = (index) => {
      setExperience(experience.filter((_, i) => i !== index))
    }


    return (
      <>
        {experience.map((exp, index) => (
          <div key={index}>
            <div className="experience-header">
              <p>{exp.position}</p>
              <p className="experience-date">{exp.date}</p>
              {isEditing && <img onClick={() => handleDelete(index)} className="trashcan" src="/trashcan.svg" alt="delete item" width="15px" /> } 
            </div>
            <div className="experience-body">
              <p className="experience-title">{exp.company}</p>
              <p className="experience-discription">{exp.description}</p>
                <ul>
                  {exp.dutiesOne && <li>{exp.dutiesOne}</li>}
                  {exp.dutiesTwo && <li>{exp.dutiesTwo}</li>}
                  {exp.dutiesThree && <li>{exp.dutiesThree}</li>}
                </ul>
            </div>
          </div>
        ))}
      </>
    );
  };

  const Input = () => {

    const [error, setError] = useState("")

    const [formData, setFormData] = useState({
      position: "",
      date: "",
      company: "",
      description: "",
      dutiesOne: "",
      dutiesTwo: "",
      dutiesThree: "",
    })

    const handleChange = (e) => {

      const {name, value} = e.target;

      setFormData({
        ...formData,
        [name]: value,
      })
    }

    const handleSubmit = (e) => {

      e.preventDefault();

      const {position, date, company, description, dutiesOne, dutiesTwo, dutiesThree} = formData;

      if(!position || !date || !company || !description || !dutiesOne || !dutiesTwo || !dutiesThree) {
        setError("All fields are required.")
        return;
      }

      if(experience.length === 3) {
        setError("Maximum of 3 experiences.")
        return;
      } 


      setExperience([
        ...experience,
        formData,
      ])
      setIsEditing(false)
      setError("");
    }

    return (
      <div>
        <form onSubmit={handleSubmit} className="add-exp-container">
          {error && <p style={{color: "red"}} >{error}</p>}
          <label htmlFor="position">Position</label>
          <input type="text" name="position" onChange={handleChange}/>
          <label htmlFor="company">Company</label>
          <input type="text" name="company" onChange={handleChange} />
          <label htmlFor="description">Description</label>
          <input type="text" name="description" onChange={handleChange} />
          <label htmlFor="date">Date</label>
          <input type="text" name="date" onChange={handleChange} />
          <label htmlFor="duties">Duties</label>
          <div className="input-boxes">
          <input type="text" name="dutiesOne" onChange={handleChange}/>
          <input type="text" name="dutiesTwo" onChange={handleChange}/>
          <input type="text" name="dutiesThree" onChange={handleChange}/>
          </div>
                    <button type="submit"><img className="add-button" src="/add-button.svg" alt="add button" width="20px" /></button>
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
