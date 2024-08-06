import { useState } from "react"

export default function Personalia() {

    const [personalia, setPersonalia] = useState({
        name: "John Reeves",
        address: "Beestreet 55 - Amsterdam",
        number: "065485282532",
        email: "Johnreeves@outlook.com",
        gender: "Male",
        licenses: "B - BA",
        nationality: "Dutch"
    })
    
    
    const [newInterest, setNewInterest] = useState("");
    const [newSkills, setNewSkills] = useState("");
    const [newLanguages, setNewLanguages] = useState("");
    
    
    const [interests, setInterests] = useState(["Learning", "Traveling", "Working Out"])
    const [skills, setSkills] = useState(["SAP", "Microsoft Virtual Studio", "Canva", "Adobe Photoshop", "React"])
    const [languages, setLanguages] = useState(["Dutch", "English", "Turkish", "Spanish"])
    
    
    const [isEditing, setIsEditing] = useState(false);
    const [interestEditing, setInterestEditing] = useState(false)
    const [skillsEditing, setSkillsEditing] = useState(false)
    const [languagesEditing, setLanguagesEditing] = useState(false)

    const handlePersonaliaEdit = (e) => {

        const { name, value } = e.target;

        setPersonalia((prevPersonalia) => ({...prevPersonalia, [name]: value}))

    }

    const handleInterestEdit = (e) => {

        e.preventDefault();

        setInterests([...interests, newInterest]);
        setInterestEditing(false);
        setNewInterest("");
        
    }

    const handleSkillEdit = (e) => {

        e.preventDefault();

        setSkills([...skills, newSkills]);
        setSkillsEditing(false);
        setNewSkills("");

    }

    const handleLanguagesEdit = (e) => {

        e.preventDefault();

        setLanguages([...languages, newLanguages])
        setLanguagesEditing(false);
        setNewLanguages("");
        
    }

    const handleDelete = (index, state, setState,) => {
        setState(state.filter((_, i) => i !== index))
    }

  return (
    
    <div className='personalia-container'>
        <div className='personalia-info'>
            <form onSubmit={e => {e.preventDefault()}}>
            <div className="personalia-header-edit">
            <p className="personalia-title personalia">Personalia</p>
            <div>
            {isEditing ? <button onClick={() => setIsEditing(false)} className="edit-button" ><img src="checkmark.svg" width="25px" height="25px" alt="Checkmark" /> </button> : <button className="edit-button" onClick={() => setIsEditing(true)}><svg aria-label="edit" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"></rect><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path></g></svg></button>}
            </div>
            </div>
            {isEditing ? 
            <>
            <p className="personalia-title">Name</p>
            <input type="text" name="name" value={personalia.name} autoFocus onChange={handlePersonaliaEdit} />
            <p className="personalia-title">Address</p>
            <input type="text" name="address" value={personalia.address} onChange={handlePersonaliaEdit} />
            <p className="personalia-title">Phone Number</p>
            <input type="text" name="number" value={personalia.number} onChange={handlePersonaliaEdit} />
            <p className="personalia-title">Email</p>
            <input type="text" name="email" value={personalia.email} onChange={handlePersonaliaEdit} />
            <p className="personalia-title">Gender</p>
            <input type="text" name="gender" value={personalia.gender} onChange={handlePersonaliaEdit} />
            <p className="personalia-title">Licenses</p>
            <input type="text" name="licenses" value={personalia.licenses} onChange={handlePersonaliaEdit} />
            <p className="personalia-title">Nationality</p>
            <input type="text" name="nationality" value={personalia.nationality} onChange={handlePersonaliaEdit} /> 
            </>
             : 
             <>
            <p className="personalia-title">Name</p>
            <p>{personalia.name}</p>
            <p className="personalia-title">Address</p>
            <p>{personalia.address}</p>
            <p className="personalia-title">Phone Number</p>
            <p>{personalia.number}</p>
            <p className="personalia-title">Email</p>
            <p>{personalia.email}</p>
            <p className="personalia-title">Gender</p>
            <p>{personalia.gender}</p>
            <p className="personalia-title">Licences</p>
            <p>{personalia.licenses}</p>
            <p className="personalia-title">Nationality</p>
            <p>{personalia.nationality}</p> 
            </>
             }
            </form>
        </div>

        <div className='personalia-interests'>
            <div className="personalia-header-edit">
            <p className="personalia-title main-title interests">Interests</p>
            {interestEditing ? <button onClick={() => setInterestEditing(false)} className="edit-button" ><img src="checkmark.svg" width="25px" height="25px" alt="Checkmark" /> </button> : <button onClick={() => setInterestEditing(true)} className="edit-button"><svg aria-label="edit" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"></rect><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path></g></svg></button>}
            </div>
            <form onSubmit={handleInterestEdit}>
                { interestEditing ? 
                <>
                {interests.map((interest, index) => (
                    <div className="item-list-row" key={index}>
                    <p>{interest}</p>
                    <img onClick={() => handleDelete(index, interests, setInterests)} className="trashcan" src="trashcan.svg" alt="delete item" width="15px" />
                    </div>
                ))}
                <input type="text" placeholder="Add new interest" value={newInterest} autoFocus onChange={e => setNewInterest(e.target.value)}/>
                </> : 
                <>
                {interests.map((interest, index) => (
                    <div key={index}>
                        <p>{interest}</p>
                    </div>
                ))}
                </>
            }
            </form>
        </div>

        <div className='personalia-skills'>
            <div className="personalia-header-edit" >
            <p className="personalia-title main-title skills">Skills</p>
            {skillsEditing ? <button onClick={() => setSkillsEditing(false)} className="edit-button" ><img src="checkmark.svg" width="25px" height="25px" alt="Checkmark" /> </button> : <button onClick={() => setSkillsEditing(true)} className="edit-button"><svg aria-label="edit" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"></rect><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path></g></svg></button>}
            </div>
            
            <form className="item-list" onSubmit={handleSkillEdit}>
                { skillsEditing ? 
                <>
                {skills.map((skill, index) => (
                    <div className="item-list-row" key={index}>
                        <p>{skill}</p>
                        <img onClick={() => handleDelete(index, skills, setSkills)} className="trashcan" src="trashcan.svg" alt="delete item" width="15px" />
                    </div>
                ))}
                <input type="text" placeholder="Add new skill" value={newSkills} autoFocus onChange={e => setNewSkills(e.target.value)}/>
                </> : 
                <>
                {skills.map((skill, index) => (
                    <div key={index}>
                        <p>{skill}</p>
                    </div>
                ))}
                </>
            }
            </form>
        </div>

        <div className='personalia-languages'>
            <div className="personalia-header-edit">
            <p className="personalia-title main-title languages">Languages</p>
        {languagesEditing ? <button onClick={() => setLanguagesEditing(false)} className="edit-button" ><img src="checkmark.svg" width="25px" height="25px" alt="Checkmark" /> </button> : <button onClick={() => setLanguagesEditing(true)} className="edit-button"><svg aria-label="edit" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"></rect><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path></g></svg></button>}
            </div>
            <form className="item-list" onSubmit={handleLanguagesEdit}>
                { languagesEditing ? 
                <>
                {languages.map((language, index) => (
                    
                    <div className="item-list-row" key={index}>
                        <p>{language}</p>
                        <img onClick={() => handleDelete(index, languages, setLanguages)} className="trashcan" src="trashcan.svg" alt="delete item" width="15px" />
                    </div>
                ))}
                <input type="text" placeholder="Add new language" value={newLanguages} autoFocus onChange={e => setNewLanguages(e.target.value)}/>
                </> : 
                <>
                {languages.map((language, index) => (
                    <div key={index}>
                        <p>{language}</p>
                    </div>
                ))}
                </>
            }
            </form>
        </div>
    </div>
  )
}
