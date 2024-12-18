import React from "react";

const App = () => {
  const scrollToPosition = (position) => {
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-between p-6">
      <div className="">
        <img className="p-2" src="imgs/r44r4r4r4r4.png" />
      </div>

      <div className="">
        <button
          onClick={() => scrollToPosition(900)}
          className="aboutBtn  h-10 w-36 rounded-3xl text-white font-semibold hover:scale-110 hover:bg-zinc-900 transition delay-150"
        >
          About
        </button>
        <button
          onClick={() => scrollToPosition(1600)}
          className="skillsBtn  h-10 w-36 rounded-3xl text-white font-semibold hover:scale-110 hover:bg-zinc-900 transition delay-150"
        >
          Skills
        </button>
        <button
          onClick={() => scrollToPosition(4600)}
          className="contactsBtn  h-10 w-36 rounded-3xl text-white font-semibold hover:scale-110 hover:bg-zinc-900 transition delay-150"
        >
          Contacts
        </button>
        <button
          onClick={() => scrollToPosition(3030)}
          className="projectsBtn  ml-3 h-10 w-36 rounded-3xl transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-300 ..."
        >
          Projects
        </button>
      </div>
    </div>
  );
};
export default App;
