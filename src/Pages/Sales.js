import { useState, useEffect } from 'react/cjs/react.development';
import './Sales.css'
import { ProductService } from '../service/ProductService';
import { SalesService } from '../service/SalesService';

import { CustomerService } from '../service/CustomerService';
import { Panel } from 'primereact/panel';
import { Dropdown } from 'primereact/dropdown';
import Const from '../const'


function Sales() {
    const [ready, setReady] = useState(false);
    const [clienteId, setClienteId] = useState("");
    const [cliente, setCliente] = useState("");
    const [consecutivo, setConsecutivo] = useState("1");
    const [productos, setProductos] = useState([]);
    const [producto1, setProducto1] = useState();
    const [producto2, setProducto2] = useState();
    const [producto3, setProducto3] = useState();
    const[cantidad1, setCantidad1] = useState("")
    const[cantidad2, setCantidad2] = useState("")
    const[cantidad3, setCantidad3] = useState("")
    const[vtotal1, setVtotal1] = useState(0)
    const[vtotal2, setVtotal2] = useState(0)
    const[vtotal3, setVtotal3] = useState(0)
    const[totalVenta, setTotalVenta] = useState(0)
    const[totalIva, setTotalIva] = useState(0)
    const[totalVentaConIva, setTotalVentaConIva] = useState(0)
    const[textBoton, setTextoBoton] = useState("Guardar")

    useEffect(() => {
        if (!ready) {
            let productService = new ProductService();
            productService.getAll().then(data =>setProductos(data));
            setReady(true);
        }
    }, [ready]);

    function ConsultarCliente() {
        let customerNew = new CustomerService();
        customerNew.get(clienteId).then(data => setCliente(data.customerName));

    }

    if (producto1 && cantidad1 && vtotal1 === 0){
        let producto = productos.filter(p => p.petId === producto1);
        setVtotal1(producto[0].salePrice * cantidad1);
        setTotalVenta(0);
    }

    if (producto2 && cantidad2 && vtotal2 === 0){
        let producto = productos.filter(p => p.petId === producto2);
        setVtotal2(producto[0].salePrice * cantidad2);
        setTotalVenta(0);
    }

    if (producto3 && cantidad3 && vtotal3 === 0){
        let producto = productos.filter(p => p.petId === producto3);
        setVtotal3(producto[0].salePrice * cantidad3);
        setTotalVenta(0);
    }

    if ((totalVenta === 0) && (vtotal1 !== 0 || vtotal2 !== 0 || vtotal3 !== 0)){
        let prod1 = productos.filter(p => p.petId === producto1);
        let prod2 = productos.filter(p => p.petId === producto2);
        let prod3 = productos.filter(p => p.petId === producto3);
        let total = vtotal1 + vtotal2 + vtotal3;
        let iva =0;

        if(prod1.length > 0)
            iva += prod1[0].ivaPrice * cantidad1 ;

        if(prod2.length > 0)
            iva += prod2[0].ivaPrice * cantidad2 ;

        if(prod3.length > 0)
            iva += prod3[0].ivaPrice * cantidad3 ;

        setTotalVenta(total);
        setTotalIva(iva);
        setTotalVentaConIva(total+iva)
    }

    function guardar(){
        if(textBoton === "Guardar"){
            let prod1 = productos.filter(p => p.petId === producto1);
            let prod2 = productos.filter(p => p.petId === producto2);
            let prod3 = productos.filter(p => p.petId === producto3);
    
            let venta = {
                customerId:clienteId,
                city:Const.ciudad,
                ivaSale:totalIva,
                totalSaleProduct:totalVenta,
                totalSale:totalVentaConIva,
                salesDetail:[
                    {
                        petId:prod1[0].petId,
                        quantity:cantidad1,
                        salePrice:vtotal1,
                        ivaPrice:prod1[0].ivaPrice,
                        totalPrice:vtotal1*prod1[0].ivaPrice
                    },
                    {
                        petId:prod2[0].petId,
                        quantity:cantidad2,
                        salePrice:vtotal2,
                        ivaPrice:prod2[0].ivaPrice,
                        totalPrice:vtotal2*prod2[0].ivaPrice
                    },
                    {
                        petId:prod3[0].petId,
                        quantity:cantidad3,
                        salePrice:vtotal3,
                        ivaPrice:prod3[0].ivaPrice,
                        totalPrice:vtotal3*prod3[0].ivaPrice
                    }
                ]
            }
    
            let salesService = new SalesService();
            salesService.save(venta).then(res => {
                setConsecutivo(res.saleId);
                setTextoBoton("Limpiar")
            });
        }
        else{
            setClienteId("");
            setCliente("");
            setConsecutivo("");
            setProducto1();
            setProducto2();
            setProducto3();
            setCantidad1("");
            setCantidad2("");
            setCantidad3("");
            setVtotal1(0);
            setVtotal2(0);
            setVtotal3(0);
            setTotalVenta(0)
            setTotalIva(0)
            setTotalVentaConIva(0);
            setTextoBoton("Guardar");
        }
    }

    return (
        <div style={{width:'80%', margin: '0 auto', marginTop: '20px'}}>
            <Panel header="VENTAS">
            <form>
                <div className="row m-4 ">
                    <div className="col-12 ">
                        <div className="form-group row">
                            <label className="col-1 col-form-label m-1" htmlFor="inputCedula" ><b>Cedula</b></label >
                            <div className="col-3 m-1">
                                <input type="text" className="form-control" id="inputCedula" placeholder="" value={clienteId} onChange={function (event) {
                                    setClienteId(event.currentTarget.value)
                                }} />
                            </div>
                            <div className="col-1 m-1">
                                <button type="button" className="btn btn-secondary sidebutton" onClick={ConsultarCliente}>Consultar</button>
                            </div>
                            <label className="col-1 col-form-label m-1" htmlFor="inputCedula" ><b>Cliente</b></label >
                            <div className="col-3 m-1">
                                <input type="text" className="form-control" id="inputCedula" placeholder="" value={cliente} onChange={function (event) {
                                    setCliente(event.currentTarget.value)
                                }} readOnly />
                            </div>
                            <label className="col-1 col-form-label m-1" htmlFor="inputCedula" ><b>Consec</b></label >
                            <div className="col-1  m-1">
                                <input type="text" className="form-control text-white bg-success " id="inputCedula" value={consecutivo} placeholder="" readOnly />
                            </div>
                        </div>
                        <hr />
                        <div className="form-group row">
                            <div className="form-group row m-2 text-center">
                                <label className="col-3 offset-2 col-form-label" htmlFor="inputCedula" ><b>Cod. Producto</b></label>
                                <label className="col-3 col-form-label" htmlFor="inputCedula" ><b>Cant</b></label >
                                <label className="col-2 col-form-label " htmlFor="inputCedula" ><b>Vlr. Total</b></label >
                            </div>
                            <div className="form-group row m-2 text-center">
                                <div className="col-3 offset-2 ">
                                    <Dropdown className="form-control input-sm" value={producto1} options={productos} onChange={(e) => setProducto1(e.value)} optionLabel="petName" optionValue="petId" filter showClear filterBy="label" placeholder="" />
                                </div>
                                <div className="col-3 contenedorProdControles">
                                    <input type="text" className="form-control" value={cantidad1} onChange={function (event) {
                                        setVtotal1(0);
                                        setCantidad1(event.currentTarget.value);
                                }} placeholder="" />
                                </div>
                                <div className="col-2 contenedorProdControles">
                                    <input type="text" className="form-control" value={vtotal1} placeholder="" />
                                </div>

                            </div>
                            <div className="form-group row m-2 text-center">
                                <div className="col-3 offset-2  ">
                                    <Dropdown className="form-control input-sm" value={producto2} options={productos} onChange={(e) => setProducto2(e.value)} optionLabel="petName" optionValue="petId" filter showClear filterBy="label" placeholder="" />
                                </div>
                                <div className="col-3  contenedorProdControles">
                                    <input type="text" className="form-control" value={cantidad2}  onChange={function (event) {
                                        setVtotal2(0);
                                        setCantidad2(event.currentTarget.value);
                                }} placeholder="" />
                                </div>
                                <div className="col-2  contenedorProdControles ">
                                    <input type="text" className="form-control" value={vtotal2} placeholder="" />
                                </div>

                            </div>
                            <div className="form-group row m-2 text-center">
                                <div className="col-3 offset-2  ">
                                    <Dropdown className="form-control input-sm" value={producto3} options={productos} onChange={(e) => setProducto3(e.value)} optionLabel="petName" optionValue="petId" filter showClear filterBy="label" placeholder="" />
                                </div>
                                <div className="col-3  contenedorProdControles">
                                    <input type="text" className="form-control" value={cantidad3}  onChange={function (event) {
                                        setVtotal3(0);
                                        setCantidad3(event.currentTarget.value);
                                }} placeholder="" />
                                </div>
                                <div className="col-2  contenedorProdControles ">
                                    <input type="text" className="form-control" value={vtotal3} placeholder="" />
                                </div>
                                <div className="form-group row m-2 text-center">
                                    <div className="col-4 offset-2 botonInferior">

                                        <button type="button" className="btn btn-primary botonOvalodo " onClick={function (e){
                                            guardar();
                                        }}>{textBoton}</button>

                                    </div>
                                    <div className="col-4 ">
                                        <div className="form-group row m-2 text-center">
                                            <label className="col-6 col-form-label" htmlFor="inputCedula" ><b>Total Venta</b></label>

                                            <div className="col-6   ">
                                                <input type="text" className="form-control" value={totalVenta} placeholder="" />
                                            </div>
                                        </div>
                                        <div className="form-group row m-2 text-center">
                                            <label className="col-6 col-form-label" htmlFor="inputCedula" ><b>Total IVA</b></label>

                                            <div className="col-6   ">
                                                <input type="text" className="form-control" value={totalIva} placeholder="" />
                                            </div>
                                        </div>
                                        <div className="form-group row m-2 text-center">
                                            <label className="col-6 col-form-label" htmlFor="inputCedula" ><b>Total con IVA</b></label>

                                            <div className="col-6   ">
                                                <input type="text" className="form-control" value={totalVentaConIva} placeholder="" />
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
        </div>

    )

}
export default Sales;