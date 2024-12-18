import React from "react";

const App = () => {
  const scrollToPosition = () => {
    window.scrollTo({
      top: 1100,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button onClick={scrollToPosition}>Descer até a posição</button>
      <div style={{ height: "1000px", background: "#f0f0f0" }}>
        <p style={{ marginTop: "500px" }}>Você chegou na posição 500px!</p>
      </div>
    </div>
  );
};

export default App;
