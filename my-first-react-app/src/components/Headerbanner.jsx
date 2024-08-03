import { useState } from "react";

export default function Headerbanner() {
  
  const [name, setName] = useState("John Reeves");
  const [isEditing, setIsEditing] = useState(false);


  return (
    <div className="header-title">
      {isEditing ? (
        <form onSubmit={e => {e.preventDefault(); setIsEditing(false)}}>
          <input
            className="header-title"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
        </form>
      ) : (
        <button aria-label="Edit Name" onClick={() => setIsEditing(true)}>{name}</button>
      )}
    </div>
  );
}
