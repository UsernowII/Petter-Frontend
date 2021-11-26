import './Products.css'

function Products(){
    return(
        <>

            <form>
                <div className="row m-4">

                    <div className="col-8 offset-2">
                        <div className="form-group row m-2">
                            <label className="col-3 col-form-label" htmlFor="inputCedula" ><b>Nombre del archivo</b></label >
                            <div className="col-9">
                                <input type="file" class="form-control-file btn btn-secondary" id="exampleFormControlFile1"/>
                            </div>

                        </div>
                    </div>
                   

                </div>
               

                <div className="row">
                    
                    <div className="col-1 offset-5">
                        <button type="button" className="btn btn-secondary m-4 sidebutton">Cargar</button>
                    </div>
                    
                   
                    
                </div>
                
            </form>



        </>
    )

}

export default Products;