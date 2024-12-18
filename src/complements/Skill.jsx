function App() {
  return (
    <div style={{ maxWidth: "100%" }}>
      <div className="">
        <div className="">
          <div className="flex justify-center">
            <h1 className="text-white text-6xl font-bold mt-20 mb-14">
              Skills
            </h1>
          </div>
          <div className=" flex  justify-center">
            <p className="text-white text-2xl p-6">
              Softwares that i have experience and some of my skills
            </p>
          </div>
          <div className="flex justify-center gap-6">
            <div className="box">
              <div className="flex justify-center">
                <h1
                  className="text-3xl font-bold mt-5"
                  style={{ color: "white" }}
                >
                  Softwares
                </h1>
              </div>
              <div className="ml-6 mt-3 text-white">
                <p>Microsoft Office</p>
                <p>Adobe Photoshop</p>
                <p>Adobe Illustrator</p>
                <p>After Effects</p>
              </div>
            </div>
            <div className="box">
              <div className="flex justify-center">
                <h1
                  className="text-3xl font-bold mt-5"
                  style={{ color: "white" }}
                >
                  Academic Formation
                </h1>
              </div>
              <div className="ml-6 mt-3 text-white">
                <p>High School (11th Grade)</p>
                <p>System Development Technician</p>
                <p>Graphic Designer</p>
              </div>
            </div>
            <div className="box">
              <div className="flex justify-center">
                <h1
                  className="text-3xl font-bold mt-5"
                  style={{ color: "white" }}
                >
                  Languages
                </h1>
              </div>
              <div className="ml-6 mt-3 text-white">
                <p>Portuguese – Native </p>
                <p>English - Advanced</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex justify-center ">
            <div className="grid grid-cols-3 gap-48 p-6 mt-36 mb-48">
              <div className="">
                <h1 className="text-white pl-5 pb-2 text-xl font-bold">HTML</h1>
                <div className="loadbar-container w-96 h-6 bg-zinc-300 rounded-xl overflow-hidden relative flex items-center">
                  <div
                    className="loadbar-progress h-full bg-amber-700 transition 0.4s"
                    style={{ width: "384px" }}
                  ></div>
                  <span className="loadbar-text absolute right-3 text-sm font-bold"></span>
                </div>
              </div>
              <div>
                <h1 className="text-white pl-5 pb-2 text-xl font-bold">CSS</h1>
                <div className="loadbar-container w-96 h-6 bg-zinc-300 rounded-xl overflow-hidden relative flex items-center">
                  <div
                    className="loadbar-progress h-full bg-amber-700 transition 0.4s"
                    style={{ width: "384px" }}
                  ></div>
                  <span className="loadbar-text absolute right-3 text-sm font-bold"></span>
                </div>
              </div>
              <div>
                <h1 className="text-white pl-5 pb-2 text-xl font-bold">
                  JavaScript
                </h1>
                <div className="loadbar-container w-96 h-6 bg-zinc-300 rounded-xl overflow-hidden relative flex items-center">
                  <div
                    className="loadbar-progress h-full bg-amber-700 transition 0.4s"
                    style={{ width: "320px" }}
                  ></div>
                  <span className="loadbar-text absolute right-3 text-sm font-bold"></span>
                </div>
              </div>
              <div>
                <h1 className="text-white pl-5 pb-2 text-xl font-bold">C#</h1>
                <div className="loadbar-container w-96 h-6 bg-zinc-300 rounded-xl overflow-hidden relative flex items-center">
                  <div
                    className="loadbar-progress h-full bg-amber-700 transition 0.4s"
                    style={{ width: "250px" }}
                  ></div>
                  <span className="loadbar-text absolute right-3 text-sm font-bold"></span>
                </div>
              </div>
              <div>
                <h1 className="text-white pl-5 pb-2 text-xl font-bold">
                  React
                </h1>
                <div className="loadbar-container w-96 h-6 bg-zinc-300 rounded-xl overflow-hidden relative flex items-center">
                  <div
                    className="loadbar-progress h-full bg-amber-700 transition 0.4s"
                    style={{ width: "280px" }}
                  ></div>
                  <span className="loadbar-text absolute right-3 text-sm font-bold"></span>
                </div>
              </div>
              <div>
                <h1 className="text-white pl-5 pb-2 text-xl font-bold">
                  MySQL
                </h1>
                <div className="loadbar-container w-96 h-6 bg-zinc-300 rounded-xl overflow-hidden relative flex items-center">
                  <div
                    className="loadbar-progress h-full bg-amber-700 transition 0.4s"
                    style={{ width: "340px" }}
                  ></div>
                  <span className="loadbar-text absolute right-3 text-sm font-bold"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
