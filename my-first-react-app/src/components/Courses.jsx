import { useState } from "react";
import { ToggleButton } from "./Experience";

const Courses = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");

  const [courses, setCourses] = useState([
    {
      title: "HR and backoffice course",
      date: "dec 2015",
      agency: "NTI - Amsterdam",
    },
  ]);

  const Experience = () => {

    const handleDelete = (index) => {

        setCourses(courses.filter((_, i) => i !== index))

    }

    return (
      <>
        {courses.map((course, index) => (
          <div key={index}>
            <div className="courses-header">
              <p className="courses-title">{course.title}</p>
              <p className="courses-date">{course.date}</p>
            </div>
            <div className="courses-body">
              <p>{course.agency}</p>
              {isEditing && <img onClick={() => handleDelete(index)} className="trashcan" src="/trashcan.svg" alt="delete item" width="15px" /> } 
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
        agency: "",
    })

    const handleChange = (e) => {

        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name]: value,
        })
        
    } 

    const handleSubmit = (e) => {

        e.preventDefault()

        const {title, date, agency} = formData;

        if(!title || !date || !agency) {
            setError("All fields required.")
            return;
        }
        if(courses.length === 4) {
            setError("Maximum of 4 courses.")
            return;
        }

        setCourses([
            ...courses,
            formData
        ])

        setError("")

    }


    return (
      <>
        <form onSubmit={handleSubmit} className="add-exp-container">
          {error && <p style={{ color: "red" }}>{error}</p>}
          <label htmlFor="title">Title</label>
          <input type="text" name="title" autoFocus onChange={handleChange} />
          <label htmlFor="date">Date</label>
          <input type="text" name="date" onChange={handleChange} />
          <label htmlFor="agency">Agency</label>
          <input type="text" name="agency" onChange={handleChange} />
          <button type="submit">
            <img
              className="add-button"
              src="/add-button.svg"
              alt="add button"
              width="20px"
            />
          </button>
        </form>
      </>
    );
  };

  return (
    <div className="courses-container">
      <div className="courses-main-title">
        <p>Courses</p>
        <ToggleButton state={isEditing} setState={setIsEditing} />
      </div>
      <Experience />
      {isEditing && <Input />}
    </div>
  );
};

export default Courses;
