import { useEffect, useState, useRef } from 'react'
import { CustomerService } from '../service/CustomerService';
import './Modal.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   //theme
import 'primereact/resources/primereact.min.css';                   //core css
import 'primeicons/primeicons.css';                                 //icons
import { Panel } from 'primereact/panel'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Menubar } from 'primereact/menubar';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { confirmDialog } from 'primereact/confirmdialog'; // To use confirmDialog method

function Customers(props) {

    const [customers, setCustomers] = useState([]); // fill object customer with data  from Api
    const [selectedCustomer, setSelectedCustomer] = useState(null); // state selected Row
    const toast = useRef(null);
    const [ready, setReady]= useState(false);

    // Modal Window
    const [showModal, setShowModal] = useState(false); 
    const [cedula, setCedula] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    

    // Menu Bar
    const items = [
        {
            label : 'Nuevo',
            icon : 'pi pi-fw pi-plus-circle',
            command:()=>{ showSaveModal()}
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
    ]; 


    const onRowSelect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Cliente Seleccionado', detail: `Nombre: ${event.data.customerName}`, life: 2000 });
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
        setCedula('');
        setName('');
        setAddress('');
        setPhone('');
        setEmail('');
        setShowModal(true);
    };

    const showConfirmDelete = () =>{
        confirmDialog({
            message: 'El registro no podr?? ser recuperado!',
            header: '??Estas seguro de querer continuar?',
            icon: 'pi pi-exclamation-triangle',
            accept: () => deleteCustomer()
        });
    };

    // CRUD
    const save =() =>{
        let customer = {};
        if (cedula !== ''){
        customer.customerId = cedula;
        }

        customer.customerName = name;
        customer.customerAddress = address;
        customer.customerPhone = phone;
        customer.customerEmail= email

        let customerNew= new CustomerService(props.url);
            customerNew.save(customer).then(res =>{
                setCedula('');
                setName('');
                setAddress('');
                setPhone('');
                setEmail('');
                setShowModal(false);
                toast.current.show({severity: 'success', summary: 'Bien hecho!', detail: 'Se guard?? el registro correctamente',life: 2000});
                customerNew.getAll().then(data => setCustomers(data));
            });
    };

    const edit = () =>{
        setCedula(selectedCustomer.customerId);
        setName(selectedCustomer.customerName);
        setAddress(selectedCustomer.customerAddress);
        setPhone(selectedCustomer.customerPhone);
        setEmail(selectedCustomer.customerEmail);
        setShowModal(true);
    };
    
    const deleteCustomer = () =>{
        let customer = new CustomerService(props.url);
        customer.delete(selectedCustomer.customerId).then(res =>{
            toast.current.show({severity: 'warn', summary: 'Atenci??n!', detail: 'Se elimino el registro correctamente',life: 2000});
            customer.getAll().then(data => setCustomers(data));
        });
    };


    useEffect(() =>{
        if (!ready ){
            let customerService = new CustomerService(props.url);
            customerService.getAll().then(data => setCustomers(data));
            setReady(true);
        }
    },[ready, props]);

    return (
        
        <div style={{width:'80%', margin: '0 auto', marginTop: '20px'}}>
            <Panel header = "CLIENTES">
                <Menubar model={items}/>
                <Toast ref={toast} />
                <DataTable value={customers}  paginator rows={5} selectionMode="single" selection={selectedCustomer} 
                    onSelectionChange={e => setSelectedCustomer(e.value)} dataKey="customerId" 
                    onRowSelect={onRowSelect} className= "p-datatble-gridlines">
                    <Column field="customerId" header="Cedula"></Column>
                    <Column field="customerName" header="Nombre"></Column>
                    <Column field="customerAddress" header="Direcci??n"></Column>
                    <Column field="customerPhone" header="Telefono"></Column>
                    <Column field="customerEmail" header="Email"></Column>
                </DataTable>
                
                <Dialog header="Nuevo Cliente" visible={showModal} style={{ width: '50vw' }} 
                    footer={renderFooter} onHide={() => setShowModal(false)}>
                    <form id="customer-form" className='p-fluid'>
                        <span className="p-float-label">
                            <InputText id="id" value={cedula} onChange={(e) => setCedula(e.target.value)} />
                            <label htmlFor="id">Cedula</label>
                        </span>
                        <span className="p-float-label">
                            <InputText id="username" value={name} onChange={(e) => setName(e.target.value)} />
                            <label htmlFor="username">Nombre</label>
                        </span>
                        <span className="p-float-label">
                            <InputText id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                            <label htmlFor="address">Direcci??n</label>
                        </span>
                        <span className="p-float-label">
                            <InputText id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            <label htmlFor="phone">Tel??fono</label>
                        </span>
                        <span className="p-float-label">
                            <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="email">Email</label>
                        </span>
                    </form>
                </Dialog>
            </Panel>
            
          
        </div>


    )

}

export default Customers;