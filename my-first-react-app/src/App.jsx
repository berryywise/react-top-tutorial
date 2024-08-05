import About from "./components/About";
import Courses from "./components/Courses";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Headerbanner from "./components/Headerbanner";
import Personalia from "./components/Personalia";
import MainContent from "./components/MainContent";

function App() {
  return (
    <>
      <div className="main">
        <div className="sidebar">
        <Personalia />
        </div>
        <Headerbanner />
        <MainContent>
          <About />
          <Experience />
          <Education />
          <Courses />
        </MainContent>
      </div>
    </>
  );
}

export default App;
