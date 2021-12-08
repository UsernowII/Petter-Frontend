import './Products.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css';   //theme
import 'primereact/resources/primereact.min.css';                   //core css
import 'primeicons/primeicons.css';                                 //icons
import './Modal.css';
import { useEffect, useState, useRef } from 'react';
import { ProductService } from '../service/ProductService';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Menubar } from 'primereact/menubar';
import { Panel } from 'primereact/panel';
import { Dialog } from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import { confirmDialog } from 'primereact/confirmdialog'; // To use confirmDialog method
import {ConsolidateService} from '../service/ConsolidateService';


function Products(props){
    
    const [products, setProducts]= useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);// state selected Row
    const toast = useRef(null);
    const [ready, setReady]= useState(false);

    // Modal Window
    const [showModal, setShowModal] = useState(false); 
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [nitProvider, setNitProvider] = useState('');
    const [cost, setCost] = useState('');
    const [iva, setIva] = useState('');
    const [salePrice, setSalePrice] = useState('');
    
    //Modal Load file
    const [showLoadFile, SetshowLoadFile] = useState(false);

    //Menu Bar
    const items = [
        {
            label : 'Nuevo',
            icon : 'pi pi-fw pi-plus-circle',
            command:()=>{ showSaveModal(true)}
        },
        {
            label : 'Editar',
            icon : 'pi pi-fw pi-pencil',
            command :() =>{edit()}
        },
        {
            label : 'Eliminar',
            icon : 'pi pi-fw pi-trash',
            command : () => {showConfirmDelete()}

        },
        {
            label:'Archivo',
            icon:'pi pi-fw pi-file-excel',
            command : () =>{loadFile()}
        }
    ];


    const onRowSelect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Producto Seleccionado', detail: `Nombre: ${event.data.petName}`, life: 2000 });
    }

    const renderFooter = () => {
        return (
            <div>
                <Button label="Cancelar" icon="pi pi-times" onClick={() => setShowModal(false)} className="p-button-text" />
                <Button label="Guardar" icon="pi pi-check" onClick={() => save()} autoFocus />
            </div>
        );
    }


    const showSaveModal = () =>{
        setCode('');
        setName('');
        setNitProvider('');
        setCost('');
        setIva('');
        setSalePrice('');
        setShowModal(true);
    };

    const showConfirmDelete = () =>{
        confirmDialog({
            message: 'El registro no podrá ser recuperado!',
            header: '¿Estas seguro de querer continuar?',
            icon: 'pi pi-exclamation-triangle',
            accept: () => deleteProduct()
        });
    };

    const loadFile = () =>{
        SetshowLoadFile(true);
    };

    // CRUD
    const save = () =>{
        let product = {};
        if (code !== ''){
            product.petId = code; 
        }
        product.petName = name;
        product.nitProvider = nitProvider;
        product.buyPrice = cost;
        product.ivaPrice = iva;
        product.salePrice = salePrice;

        let productService = new ProductService(props.url);
        productService.save(product).then(res =>{
            setCode('');
            setName('');
            setNitProvider('');
            setCost('');
            setIva('');
            setSalePrice('');
            setShowModal(false);
            toast.current.show({severity: 'success', summary: 'Bien hecho!', detail: 'Se guardó el registro correctamente',life: 2000});
            });
            
    };
    
        
    const edit = () =>{
        setCode(selectedProduct.petId);
        setName(selectedProduct.petName);
        setNitProvider(selectedProduct.nitProvider);
        setCost(selectedProduct.buyPrice);
        setIva(selectedProduct.ivaPrice);
        setSalePrice(selectedProduct.salePrice);
        setShowModal(true);   

    };    


    const deleteProduct = () =>{
        let productService = new ProductService(props.url);
        productService.delete(selectedProduct.petId).then(res =>{
            toast.current.show({severity: 'warn', summary: 'Atención!', detail: 'Se elimino el registro correctamente',life: 2000});
        });
    };
    


    function uploadFile (){
        let consolidateService = new ConsolidateService(props.url);
        var file = document.getElementById("file1").value;
        consolidateService.save(file);

    }

    useEffect(() => {
        if (!ready ){
            let productService = new ProductService(props.url);
            productService.getAll().then(data => setProducts(data));
            setReady(true);
        }    
    },[ready, props]);

    

    

    return(
        
        <div style={{width:'80%', margin: '0 auto', marginTop: '20px'}}>
            <Panel header = "PRODUCTOS">
            <Menubar model={items}/>
            <Toast ref={toast} />
            <DataTable value={products} selectionMode="single" selection={selectedProduct} 
                    onSelectionChange={e => setSelectedProduct(e.value)} dataKey="petId" 
                    onRowSelect={onRowSelect} className= "p-datatble-gridlines">     
                <Column field="petId" header="Codigo"></Column>
                <Column field="petName" header="Nombre"></Column>
                <Column field="nitProvider" header="Nit Proveedor"></Column>
                <Column field="buyPrice" header="Precio"></Column>
                <Column field="ivaPrice" header="IVA"></Column>
                <Column field="salePrice" header="Precio venta"></Column>
            </DataTable>
            </Panel>
                
                <Dialog header="Nuevo Producto" visible={showModal} style={{ width: '50vw' }} 
                    footer={renderFooter} onHide={() => setShowModal(false)}>
                    <form id="customer-form" className='p-fluid'>
                        <span className="p-float-label">
                            <InputText id="id" value={code} onChange={(e) => setCode(e.target.value)} />
                            <label htmlFor="id">Codigo</label>
                        </span>
                        <span className="p-float-label">
                            <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} />
                            <label htmlFor="name">Nombre</label>
                        </span>
                        <span className="p-float-label">
                            <InputText id="nit" value={nitProvider} onChange={(e) => setNitProvider(e.target.value)} />
                            <label htmlFor="nit">Nit Proveedor</label>
                        </span>
                        <span className="p-float-label">
                            <InputText id="cost" value={cost} onChange={(e) => setCost(e.target.value)} />
                            <label htmlFor="cost">Precio</label>
                        </span>
                        <span className="p-float-label">
                            <InputText id="iva" value={iva} onChange={(e) => setIva(e.target.value)} />
                            <label htmlFor="iva">IVA</label>
                        </span>
                        <span className="p-float-label">
                            <InputText id="salePrice" value={salePrice} onChange={(e) => setSalePrice(e.target.value)} />
                            <label htmlFor="salePrice">Precio Venta</label>
                        </span>
                    </form>
                </Dialog>
                
                <Dialog header="Cargar Archivo" visible={showLoadFile} style={{ width: '50vw' }}
                    onHide={() => SetshowLoadFile(false)} >
                    <form>
                        <div className="row m-4">

                            <div className="col-8 offset-2">
                                <div className="form-group row m-2">
                                    <label className="col-3 col-form-label" htmlFor="inputCedula" ><b>Nombre del archivo</b></label >
                                    <div className="col-9">
                                        <input type="file" class="form-control-file btn btn-secondary" id="file1"/>
                                    </div>
                                </div>
                            </div>
                        </div>
               

                        <div className="row">
                            <div className="col-1 offset-5">
                                <Button label="Cargar" icon='pi pi-arrow-circle-up' onClick={function (e){uploadFile();}}/>
                            </div>
                        </div>
                
                    </form>
                </Dialog>
            
        </div>
            
        
        

        
    )

}

export default Products;