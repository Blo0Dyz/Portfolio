import Head from "./complements/Head";
import About from "./complements/About";
import Skill from "./complements/Skill";
import Contacts from "./complements/Contacts";
import Projects from "./complements/Projects";

function App() {
  return (
    <div className="bg-black w-screen h-screen">
      <Head />
      <img className="" src="imgs/test_Banner.jpg" />
      <About />
      <div className="bg-black">
        <div className="">
          <Skill />
        </div>
      </div>
      <div
        className="bg-neutral-900 w-screen h-screen"
        style={{ height: 1200 }}
      >
        <Projects />
      </div>
      <div className="bg-black" style={{ height: 730 }}>
        <Contacts />
      </div>
    </div>
  );
}

export default App;
