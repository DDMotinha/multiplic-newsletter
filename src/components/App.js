import '../styles/App.css';

function App() {
  const mnLogo = require('../images/mn-logo.png');
  return (
    <div className="mn-nav">
      <div className="mn-logo">
        <img href={mnLogo} className="mn-logo" alt="logo" />
      </div>
      <div className="mn-list">
        <p>Text</p>
      </div>
      <div className="mn-blockLogin">

      </div>
    </div>
  );
}

export default App;
