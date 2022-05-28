import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Main from "./routes/Main";
import style from "./App.module.css";
import Menu from "./components/Menu";
import International from "./routes/International";
import Bener from "./title.png";


function App() {
  return (
  <Router>
    <header className={style.header}>
        <img src={Bener} className={style.header}/>
      {/* <h1 className={style.h1}>Time to travelog</h1> */}
    </header>
    <Menu/>
    <div className={style.style}>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Main/>} />
        <Route path="/spot/:id" element={<Detail/>}/>
        <Route path="/domestic"  element={<Home/>}/>
        <Route path="/international" element={<International/>}/>
      </Routes>
    </div>
  </Router>
   );
} 

export default App;
