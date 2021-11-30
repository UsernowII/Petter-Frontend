import { useEffect, useState, useRef } from 'react'
import { CustomerService } from '../service/CustomerService';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   //theme
import 'primereact/resources/primereact.min.css';                   //core css
import 'primeicons/primeicons.css';                                 //icons
import './Customers.css'
import { Panel } from 'primereact/panel'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Menubar } from 'primereact/menubar';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';




function Customers() {

    const [customers, setCustomers] = useState([]); // fill object customer with data  from Api
    const [selectedCustomer, setSelectedCustomer] = useState(null); // state selected Row
    const toast = useRef(null);

    // Modal Window
    const [showModal, setShowModal] = useState(false); 
    const [cedula, setCedula] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const items = [
        {
            label : 'Nuevo',
            icon : 'pi pi-fw pi-plus-circle',
            command:()=>{ setShowModal(true)}
        },
        {
            label : 'Editar',
            icon : 'pi pi-fw pi-pencil'
        },
        {
            label : 'Eliminar',
            icon : 'pi pi-fw pi-trash'
        },
        {
            label:'Archivo',
            icon:'pi pi-fw pi-file',
        }
    ]; // Menu Bar


    const onRowSelect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Cliente Seleccionado', detail: `Nombre: ${event.data.customerName}`, life: 3000 });
    }
    const onRowUnselect = (event) => {
        toast.current.show({ severity: 'warn', summary: 'Product Unselected', detail: `customerName: ${event.data.customerName}`, life: 3000 });
    } 

    const renderFooter = () => {
        return (
            <div>
                <Button label="Cancelar" icon="pi pi-times" onClick={() => setShowModal(false)} className="p-button-text" />
                <Button label="Guardar" icon="pi pi-check" onClick={() => save()} autoFocus />
            </div>
        );
    }

    const save =() =>{
        let customer = {};
        customer.customerId = cedula;
        customer.customerName = name;
        customer.customerAddress = address;
        customer.customerPhone = phone;
        customer.customerEmail= email

        let customerNew= new CustomerService();
            customerNew.save(customer).then(res =>{
                setCedula('');
                setName('');
                setAddress('');
                setPhone('');
                setEmail('');
                setShowModal(false);
            });
    };
     

    useEffect(() =>{
        let customerService = new CustomerService();
        customerService.getAll().then(data => setCustomers(data));
    });

   

    return (
        <>
        <div style={{width:'80%', margin: '0 auto', marginTop: '20px'}}>
            <Panel header = "CLIENTES">
                <Menubar model={items}/>
                <Toast ref={toast} />
                <DataTable value={customers} selectionMode="single" selection={selectedCustomer} 
                    onSelectionChange={e => setSelectedCustomer(e.value)} dataKey="customerId" 
                    onRowSelect={onRowSelect} onRowUnselect={onRowUnselect} className= "p-datatble-gridlines">
                    <Column field="customerId" header="Cedula"></Column>
                    <Column field="customerName" header="Nombre"></Column>
                    <Column field="customerAddress" header="Dirección"></Column>
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
                            <label htmlFor="address">Dirección</label>
                        </span>
                        <span className="p-float-label">
                            <InputText id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            <label htmlFor="phone">Teléfono</label>
                        </span>
                        <span className="p-float-label">
                            <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="email">Email</label>
                        </span>
                    </form>
                </Dialog>
            </Panel>
            
          
        </div>

            
            
        </>

    )

}

export default Customers;