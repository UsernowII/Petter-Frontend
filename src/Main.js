import imagen from './assets/img/FotoMascotas.jpg'
import './Main.css'
import logo from './assets/img/LogoBlanco.png'
import Customers from './Pages/Customers'
import { useState } from 'react'
import Products from './Pages/Products'

function Main() {
  const[opcionSeleccionada,setOpcionseleccionada]=useState("Customers")

  let contenido=<Customers />

  if(opcionSeleccionada==="Products"){
    contenido=<Products />
  }
  else if(opcionSeleccionada==="Customers"){
    contenido=<Customers />
  }


  return (
    <>
      <nav className="navbar text-white colorcabecera">
        <div className="navbar-brand mb-0 h1">
          <img className="" src={logo} width="30px" alt="logo" />
          <span className="titulocabecera"><span className="titulo"><span>Pet</span>ter Mascotas</span>- Sucursal Cali/ Medellin/ Bogota</span>
        </div>

      </nav>
      <div className="wrapper">
        <nav id="sidebar" className="p-4">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <button type="button" className="btn btn-outline-success m-2 sidebutton" onClick={function(event){
                  setOpcionseleccionada("Products")
                }} >Mascotas</button>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <button type="button" className="btn btn-outline-success m-2 sidebutton" onClick={function(event){
                  setOpcionseleccionada("Customers")
                }}>Clientes</button>
              </div>
            </div>
            <div className="row">
              <div className="col text-center"/>
                <button type="button" className="btn btn-outline-success m-2 sidebutton">Ventas</button>
              </div>
              <div className="row">
              <div className="col text-center">
                <button type="button" className="btn btn-outline-success m-2 sidebutton">Reportes</button>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <button type="button" className="btn btn-outline-success m-2 sidebutton">Consolidaci&oacute;n</button>
              </div>
            </div>
          </div>
         
        </nav>
        <div id="contenido">
          <div className="p-0 m-0">
            <div >
              <img className="mascotaslogin" src={imagen} alt="imagen" />
            </div>   
            
            {contenido}


          </div>        
        </div>
      </div>

    </>
  )

}

export default Main