import About from './components/About'
import Courses from './components/Courses'
import Education from './components/Education'
import Experience from './components/Experience'
import Headerbanner from './components/Headerbanner'
import Personalia from './components/Personalia'

function App() {

  return (
    <>
    <div className='main'>
      <div className='sidebar'>
      <Personalia />
      </div>
      <div className='main-content'>
      <Headerbanner />
      <About />
      <Experience />
      <Education />
      <Courses />
      </div>
    </div>
    </>
  )
}

export default App
