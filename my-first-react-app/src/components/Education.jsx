import { useState } from "react";
import { ToggleButton } from "./Experience";

export default function Education() {
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");

  const [education, setEducation] = useState([
    {
      title: "Freelance Web Developer",
      date: "dec. 2017 - present",
      school: "University of Amsterdam - Amsterdam",
    },
  ]);

  const Experience = () => {

    const handleDelete = (index) => {

        setEducation(education.filter((_, i) => i !== index))

    }

    return (
      <>
        {education.map((edu, index) => (
          <div key={index}>
            <div className="education-header">
              <p className="education-title">
                {edu.title}
              </p>
              <p className="education-date">{edu.date}</p>
              {isEditing && <img onClick={() => handleDelete(index)} className="trashcan" src="/trashcan.svg" alt="delete item" width="15px" /> } 
            </div>
            <div className="education-body">
              <p>{edu.school}</p>
            </div>
          </div>
        ))}
      </>
    );
  };

  const Input = () => {
    const [formData, setFormData] = useState({
      title: "",
      date: "",
      school: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;

      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      const {title, date, school} = formData;

      if(!title || !date || !school) {
        setError("All fields are required.")
        return;
      }
      if(education.length === 4) {
        setError("Maximum of 4 schools.")
        return;
      }

      setEducation([...education, formData]);
      setError("");

    };

    return (
      <form onSubmit={handleSubmit} className="add-exp-container">
        {error && <p style={{ color: "red" }}>{error}</p>}
        <label htmlFor="title">Title</label>
        <input type="text" name="title" autoFocus onChange={handleChange} />
        <label htmlFor="date">Date</label>
        <input type="text" name="date" onChange={handleChange} />
        <label htmlFor="school">School</label>
        <input type="text" name="school" onChange={handleChange} />
        <button type="submit">
          <img
            className="add-button"
            src="/add-button.svg"
            alt="add button"
            width="20px"
          />
        </button>
      </form>
    );
  };

  return (
    <div className="education-container">
      <div className="education-main-title">
        <p>Educational</p>
        <ToggleButton state={isEditing} setState={setIsEditing} />
      </div>
      <Experience />
      {isEditing && <Input />}
    </div>
  );
}
