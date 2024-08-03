import { useState } from "react";

const defaultText =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, provident impedit sit, pariatur exercitationem ipsam quasi iure voluptatem dolore, ea nesciunt earum soluta nobis laboriosam! Id, illo veritatis? Doloremque, id.";

export default function About() {
  const [aboutText, setAboutText] = useState(defaultText);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="about-container">
      {isEditing ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsEditing(false);
          }}
        >
          <input type="textarea" autoFocus size="100" value={aboutText} onChange={e => setAboutText(e.target.value)} />
        </form>
      ) : (
        <button aria-label="Edit Name"  onClick={() => setIsEditing(true)}>{aboutText}</button>
      )}
    </div>
  );
}
