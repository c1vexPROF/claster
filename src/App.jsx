
import './App.css';
import { Main } from "./components/Main/Main";
import logo from "./components/imgs/logo.png";
import arrowdown from "./components/imgs/Line 10.png"
import shtuka from "../"

function App() {
  return (
    <div className="allsite">
      <header className="header">
          <div className="header-div">
              <div className="header-logo">
                  <a href="#">
                      <img height={48} src={logo}></img>
                  </a>
              </div>
              <div className="header-btn">
                  <a href="#">
                      <span className="header-btn-text">Для ИОГВ &nbsp;</span>
                      <img height={7} src={arrowdown}></img>
                  </a>
              </div>
              <div className="header-btn">
                  <a href="#">
                      <span className="header-btn-text">Для образовательных организаций &nbsp;</span>

                      <img height={7} src={arrowdown}></img>

                  </a>
              </div>
              <div className="header-btn">
                  <a href="#">
                      <span className="header-btn-text">Для бизнеса &nbsp;</span>

                      <img height={7} src={arrowdown}></img>

                  </a>
              </div>
              <div className="header-btn">
                  <a href="#">
                      <span className="header-btn-text">Для населения &nbsp;</span>

                      <img height={7} src={arrowdown}></img>
                  </a>
              </div>
          </div>
      </header>
      <Main/>
    </div>
  );
}

export default App;
