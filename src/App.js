import Login from './Login'
import Main from './Main'
import './App.css';
import { useState } from 'react';


function App() {
  const[estaLogeado,setEstalogeado]=useState(false)
  const[ciudad,setCiudad]=useState()
  const[urlBackend,setUrlBackend]=useState()
 
    let contenido = <Login funcEstaLogeado={setEstalogeado} funcCiudad={setCiudad} funcUrlBackend={setUrlBackend} /> 

    if (estaLogeado)
        contenido = <Main ciudad={ciudad} url={urlBackend} />
    
  return (
    <>
        {contenido}
    </>
  );
}

export default App;
