import { useState } from 'react/cjs/react.development';
import './Sales.css'

import { CustomerService } from '../service/CustomerService';
import { Panel } from 'primereact/panel';


function Sales() {
    const[clienteId,setClienteId]=useState("");
    const[cliente,setCliente]=useState("");

    function ConsultarCliente() {
        let customerNew= new CustomerService();
        customerNew.get(clienteId).then(data =>setCliente(data.customerName));

    }
    return (
        <>  
            <Panel header = "VENTAS">
            <form>
                <div className="row m-4 ">
                    <div className="col-12 ">
                        <div className="form-group row">
                            <label className="col-1 col-form-label m-1" htmlFor="inputCedula" ><b>Cedula</b></label >
                            <div className="col-3 m-1">
                                <input type="text" className="form-control" id="inputCedula" placeholder="" value={clienteId} onChange={function (event) {
                                    setClienteId(event.currentTarget.value)
                                }}/>
                            </div>
                            <div className="col-1 m-1">
                                <button type="button" className="btn btn-secondary sidebutton" onClick={ConsultarCliente}>Consultar</button>
                            </div>
                            <label className="col-1 col-form-label m-1" htmlFor="inputCedula" ><b>Cliente</b></label >
                            <div className="col-3 m-1">
                                <input type="text" className="form-control" id="inputCedula" placeholder="" value={cliente} onChange={function (event) {
                                    setCliente(event.currentTarget.value)
                                }}/>
                            </div>
                            <label className="col-1 col-form-label m-1" htmlFor="inputCedula" ><b>Consec</b></label >
                            <div className="col-1  m-1">
                                <input type="text" className="form-control" id="inputCedula" placeholder="" />
                            </div>
                            <div className="form-group row m-2 text-center">
                                <label className="col-3 col-form-label" htmlFor="inputCedula" ><b>Cod. Producto</b></label>
                                <label className="col-4 offset-2 col-form-label" htmlFor="inputCedula" ><b>Nombre Producto</b></label>
                                <label className="col-1 col-form-label" htmlFor="inputCedula" ><b>Cant</b></label >
                                <label className="col-2 col-form-label " htmlFor="inputCedula" ><b>Vlr. Total</b></label >
                            </div>
                            <div className="form-group row m-2 text-center">
                                <div className="col-3 margenControles  ">
                                    <input type="text" className="form-control" id="inputCedula" placeholder="" />
                                </div>
                                <div className="col-2 margenControles ">
                                    <button type="button" className="btn btn-secondary botonOvalodo ">Consultar</button>
                                </div>
                                <div className="col-4 margenControles ">
                                    <input type="text" className="form-control" id="inputCedula" placeholder="" />
                                </div>
                                <div className="col-1 margenControles ">
                                    <input type="text" className="form-control" id="inputCedula" placeholder="" />
                                </div>
                                <div className="col-2 margenControles  ">
                                    <input type="text" className="form-control" id="inputCedula" placeholder="" />
                                </div>

                            </div>
                            <div className="form-group row m-2 text-center">
                                <div className="col-3 margenControles  ">
                                    <input type="text" className="form-control" id="inputCedula" placeholder="" />
                                </div>
                                <div className="col-2 margenControles ">
                                    <button type="button" className="btn btn-secondary botonOvalodo ">Consultar</button>
                                </div>
                                <div className="col-4 margenControles ">
                                    <input type="text" className="form-control" id="inputCedula" placeholder="" />
                                </div>
                                <div className="col-1 margenControles ">
                                    <input type="text" className="form-control" id="inputCedula" placeholder="" />
                                </div>
                                <div className="col-2 margenControles  ">
                                    <input type="text" className="form-control" id="inputCedula" placeholder="" />
                                </div>

                            </div>
                            <div className="form-group row m-2 text-center">
                                <div className="col-3 margenControles  ">
                                    <input type="text" className="form-control" id="inputCedula" placeholder="" />
                                </div>
                                <div className="col-2 margenControles ">
                                    <button type="button" className="btn btn-secondary botonOvalodo ">Consultar</button>
                                </div>
                                <div className="col-4 margenControles ">
                                    <input type="text" className="form-control" id="inputCedula" placeholder="" />
                                </div>
                                <div className="col-1 margenControles ">
                                    <input type="text" className="form-control" id="inputCedula" placeholder="" />
                                </div>
                                <div className="col-2 margenControles  ">
                                    <input type="text" className="form-control" id="inputCedula" placeholder="" />
                                </div>
                                <div className="form-group row m-2 text-center">
                                    <div className="col-4 offset-4 botonInferior">

                                        <button type="button" className="btn btn-secondary botonOvalodo ">Consultar</button>

                                    </div>
                                    <div className="col-4 ">
                                        <div className="form-group row m-2 text-center">
                                            <label className="col-6 col-form-label" htmlFor="inputCedula" ><b>Total Venta</b></label>

                                            <div className="col-6 margenControles  ">
                                                <input type="text" className="form-control" id="inputCedula" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="form-group row m-2 text-center">
                                            <label className="col-6 col-form-label" htmlFor="inputCedula" ><b>Total IVA</b></label>

                                            <div className="col-6 margenControles  ">
                                                <input type="text" className="form-control" id="inputCedula" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="form-group row m-2 text-center">
                                            <label className="col-6 col-form-label" htmlFor="inputCedula" ><b>Total con IVA</b></label>

                                            <div className="col-6 margenControles  ">
                                                <input type="text" className="form-control" id="inputCedula" placeholder="" />
                                            </div>
                                        </div>


                                    </div>
                                    



                                </div>

                            </div>

                        </div>
                    </div>
                </div>




            </form>
            </Panel>                        



        </>
    )

}
export default Sales;