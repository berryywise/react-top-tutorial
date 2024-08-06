import { useState } from "react";
import {ToggleButton} from "./Experience"

const defaultText =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, provident impedit sit, pariatur exercitationem ipsam quasi iure voluptatem dolore, ea nesciunt earum soluta nobis laboriosam! Id, illo veritatis? Doloremque, id.";

export default function About() {
  const [aboutText, setAboutText] = useState(defaultText);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="about-container">
      {isEditing ? (
        <form
          className="about-form"
          onSubmit={(e) => {
            e.preventDefault();
            setIsEditing(false);
          }}
        >
          <input className="about-input"
            type="textarea"
            autoFocus
            value={aboutText}
            onChange={(e) => setAboutText(e.target.value)}
          />
        </form>
      ) : (
        <p>{aboutText}</p>
      )}
    <ToggleButton state={isEditing} setState={setIsEditing} />
    </div>
  );
}
