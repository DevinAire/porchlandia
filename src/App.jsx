import './App.css';

function App() {
  return (
    <div className="porch-container">

      {/* TEXT OVERLAY */}
      <div className="overlay">
        <h1 className="title">Porchlandia</h1>
        <p className="subtitle">
          Where stories rest. Where bears become. <br></br> Where the porch remembers.
        </p>
        <p className="footer">
          Coming Soon — A world by Brent Brooks & Senty Sterling Martindale Brooks
        </p>
      </div>

      {/* MUGS ON TABLE */}
      <div className="mug-wrap">
        <img src="/mugs.png" alt="Two steaming mugs" className="mugs-image" />
      </div>

    </div>
  );
}

export default App;
