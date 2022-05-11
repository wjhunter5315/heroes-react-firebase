import { Link } from 'react-router-dom';
import './App.css';
import Main from "./Pages/Main/Main";

function App() {
  return (
    <div className="root">
      <Link to="/main">Main</Link>
      <Link to="/avengers">Avengers</Link>
      <Link to="/xmen">X-Men</Link>
      <Link to="/defenders">Defenders</Link>
      <Main />
    </div>
  );
}

export default App;
