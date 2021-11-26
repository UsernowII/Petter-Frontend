import './Sales.css'

function Sales() {
    return (
        <>
            <form>
                <div className="row m-4 ">
                    <div className="col-12 ">
                        <div className="form-group row">
                            <label className="col-1 col-form-label m-1" htmlFor="inputCedula" ><b>Cedula</b></label >
                            <div className="col-3 m-1">
                                <input type="text" className="form-control" id="inputCedula" placeholder="" />
                            </div>
                            <div className="col-1 m-1">
                                <button type="button" className="btn btn-secondary sidebutton">Consultar</button>
                            </div>
                            <label className="col-1 col-form-label m-1" htmlFor="inputCedula" ><b>Cliente</b></label >
                            <div className="col-3 m-1">
                                <input type="text" className="form-control" id="inputCedula" placeholder="" />
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




        </>
    )

}
export default Sales;