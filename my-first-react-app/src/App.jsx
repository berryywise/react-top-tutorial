import About from './components/About'
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
      </div>
    </div>
    </>
  )
}

export default App
