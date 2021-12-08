import imagen from './assets/img/FotoMascotas.jpg'
import './Main.css'
import logo from './assets/img/LogoBlanco.png'
import Customers from './Pages/Customers'
import { useState } from 'react'
import Products from './Pages/Products'
import Sales from './Pages/Sales'
import Reports from './Pages/Reports'
import Consolidation from './Pages/Consolidation'


function Main(props) {
  const [opcionSeleccionada, setOpcionseleccionada] = useState("Bogota");

  let opcionConsolidacion = <></>;

  if (props.ciudad === "Bogota") {
    opcionConsolidacion =
      <div className="row">
        <div className="col text-center">
          <button type="button" className="btn btn-outline-success m-2 sidebutton" onClick={function (event) {
            setOpcionseleccionada("Consolidation")
          }}>Consolidaci&oacute;n</button>
        </div>
      </div>
  }

  let contenido = <div className="row m-4"><div className="col-6 offset-3 text-center"><h2>Bienvenido a Petter Mascotas</h2><br /><span className="text-success h2">{props.ciudad}</span></div></div>

  if (opcionSeleccionada === "Products") {
    contenido = <Products url={props.url} />
  }
  else if (opcionSeleccionada === "Customers") {
    contenido = <Customers url={props.url} />
  }
  else if (opcionSeleccionada === "Sales") {
    contenido = <Sales url={props.url} />
  }
  else if (opcionSeleccionada === "Reports") {
    contenido = <Reports url={props.url} ciudad={props.ciudad} />
  }
  else if (opcionSeleccionada === "Consolidation") {
    contenido = <Consolidation />
  }


  return (
    <>
      <nav className="navbar text-white colorcabecera">
        <div className="navbar-brand mb-0 h1">
          <img className="" src={logo} width="30px" alt="logo" />
          <span className="titulocabecera"><span className="titulo"><span>Pet</span>ter Mascotas</span>- Sucursal {props.ciudad}</span>
        </div>

      </nav>
      <div className="wrapper">
        <nav id="sidebar" className="p-4">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <button type="button" className="btn btn-outline-success m-2 sidebutton" onClick={function (event) {
                  setOpcionseleccionada("Products")
                }} >Mascotas</button>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <button type="button" className="btn btn-outline-success m-2 sidebutton" onClick={function (event) {
                  setOpcionseleccionada("Customers")
                }}>Clientes</button>
              </div>
            </div>
            <div className="row">
              <div className="col text-center" />
              <button type="button" className="btn btn-outline-success m-2 sidebutton" onClick={function (event) {
                setOpcionseleccionada("Sales")
              }}>Ventas</button>
            </div>
            <div className="row">
              <div className="col text-center">
                <button type="button" className="btn btn-outline-success m-2 sidebutton" onClick={function (event) {
                  setOpcionseleccionada("Reports")
                }}>Reportes</button>
              </div>
            </div>
            {opcionConsolidacion}
            <div className="row">
              <div className="col text-center">
                <button type="button" className="btn btn-outline-success m-2 sidebutton" onClick={function (event) {
                  window.location.reload(false);
                }}>Salir</button>
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

export default Main;