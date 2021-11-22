import Login from './Login'
import Main from './Main'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
    let estaLogeado = true;
    let contenido = <Login /> 

    if (estaLogeado)
        contenido = <Main />
    
  return (
      
      <Router>
        <Routes>
          <Route path="/" caseSensitive={false} element={<Login />} />
          <Route path="/customer" caseSensitive={false} element={<Main />} />	
        </Routes>
	    </Router>
    
  );
}

export default App;
