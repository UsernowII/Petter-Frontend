import Login from './Login'
import Main from './Main'
import './App.css';
import { useState } from 'react';


function App() {
  const[estaLogeado,setEstalogeado]=useState(true)
 
    let contenido = <Login funcEstaLogeado={setEstalogeado} /> 

    if (estaLogeado)
        contenido = <Main />
    
  return (
    <>
        {contenido}
    </>
  );
}

export default App;
