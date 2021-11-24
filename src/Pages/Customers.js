import './Customers.css'

function Customers() {
    return (
        <>
            <form>
                <div className="row m-4">

                    <div className="col-4 offset-2">
                        <div className="form-group row m-2">
                            <label className="col-4 col-form-label" htmlFor="inputCedula" ><b>Cedula</b></label >
                            <div className="col-8">
                                <input type="text" className="form-control" id="inputCedula" placeholder="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 ">
                        <div className="form-group row m-2">
                            <label className="col-4 col-form-label" htmlFor="inputCedula" ><b>Telefono</b></label >
                            <div className="col-8">
                                <input type="text" className="form-control" id="inputCedula" placeholder="" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row m-2">

                    <div className="col-4 offset-2">
                        <div className="form-group row m-2">
                            <label className="col-4 col-form-label" htmlFor="inputCedula" ><b>Nombre completo</b></label >
                            <div className="col-8">
                                <input type="text" className="form-control" id="inputCedula" placeholder="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 ">
                        <div className="form-group row m-2">
                            <label className="col-4 col-form-label" htmlFor="inputCedula" ><b>Correo Elect&oacute;nico</b></label >
                            <div className="col-8">
                                <input type="text" className="form-control" id="inputCedula" placeholder="" />
                            </div>
                        </div>
                    </div>


                </div>
                <div className="row m-2">

                    <div className="col-4 offset-2">
                        <div className="form-group row m-2">
                            <label className="col-4 col-form-label" htmlFor="inputCedula" ><b>Direcci&oacute;n</b></label >
                            <div className="col-8">
                                <input type="text" className="form-control" id="inputCedula" placeholder="" />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-1 offset-2">
                        <button type="button" className="btn btn-secondary m-4 sidebutton">Consultar</button>
                    </div>
                    <div className="col-1 offset-1">
                        <button type="button" className="btn btn-secondary m-4 sidebutton">Crear</button>
                    </div>
                    <div className="col-1 offset-1">
                        <button type="button" className="btn btn-secondary m-4 sidebutton">Actualizar</button>
                    </div>
                    <div className="col-1 offset-1">
                        <button type="button" className="btn btn-secondary m-4 sidebutton">Borrar</button>
                    </div>
                    
                </div>
                
            </form>
        </>

    )

}

export default Customers