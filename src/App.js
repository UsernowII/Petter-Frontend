import Login from './Login'
import Main from './Main'
import './App.css';


function App() {
    let estaLogeado = true;
    let contenido = <Login /> 

    if (estaLogeado)
        contenido = <Main />
    
  return (
    <>
        {contenido}
    </>
  );
}

export default App;
