function App() {
  return (
    <div className="">
      <div className="">
        <h1 className="text-white text-6xl font-bold p-6">Contacts</h1>
        <div className="flex gap-8 p-6">
          <div className="flex">
            <img className="w-8 h-8" src="./logos/Linkedin.png" />
            <a
              className="text-white font-bold ml-2 mt-1"
              target="_blank"
              href="https://www.linkedin.com/in/marcio-a-36a650312/"
            >
              Linkedin/marcio
            </a>
          </div>
          <div className="flex">
            <img className="w-8 h-8" src="./logos/Behance.png" />

            <a
              className="text-white font-bold ml-2 mt-1"
              target="_blank"
              href="https://www.behance.net/marcioac"
            >
              Behance/marcioac
            </a>
          </div>
          <div className="flex hover:cursor-default">
            <img className="w-8 h-8" src="./logos/Email.png" />
            <p className="text-white font-bold ml-2 mt-1">
              m.antonio.cs00@gmail.com
            </p>
          </div>
        </div>
        <p>Some skills that i have,</p>
      </div>
    </div>
  );
}

export default App;
