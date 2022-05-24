import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import style from "./App.module.css";
import Menu from "./components/Menu";


function App() {
  return (
  <Router>
    <header className={style.header}>
      <h1>Web program travel blog!</h1>
    </header>
    <Menu/>
    <div className={style.style}>
      <Routes>
        <Route path="/spot/:id" element={<Detail/>}/>
        <Route path={`${process.env.PUBLIC_URL}/`}  element={<Home/>}/>
      </Routes>
    </div>
  </Router>
   );
} 

export default App;
