import { Panel } from 'primereact/panel';
import { Toast } from 'primereact/toast';
import { useState, useEffect, useRef } from 'react/cjs/react.development';
import { Column } from 'primereact/column';
import { ReportsService } from '../service/ReportsService';
import { DataTable } from 'primereact/datatable';
import './Reports.css'
import {ConsolidateService} from "../service/ConsolidateService";
import {Button} from 'primereact/button';


function Reports(props) {
    const toast = useRef(null);
    const [ventasPorClientes, setVentasPorClientes] = useState([])
    const [totalVentas, setTotalVentas] = useState(0)
    const [ready, setReady] = useState(false);
    const [panelCollapsedSale, setPanelCollapsedSale] = useState(false);
    const [panelCollapsed, setPanelCollapsed] = useState(true);

    useEffect(() => {
        if (!ready) {
            let reportsService = new ReportsService(props.url);
            let total = 0;

            reportsService.customerSales().then(data => {
                setVentasPorClientes(data);

                for (let cont = 0; cont < data.length; cont++) {
                    total += data[cont].totalSale;
                }

                setTotalVentas(total);
            });
            setReady(true);
        }
    }, [ready, props]);

    function consolidar(){
        let consolidateService = new ConsolidateService(props.url);
        let consolidateObj = {city: props.ciudad, totalSales: totalVentas}
        consolidateService.save(consolidateObj).then(data => {
            console.log(data)
            toast.current.show({severity: 'success', summary: 'Bien hecho!', detail: 'Se guardó el consolidado de '+props.ciudad,life: 2000});
        });


    };

  

    return (
        
            <div style={{ width: '80%', margin: '0 auto', marginTop: '20px' }}>
                <Panel className="card">
                    <div className="col-8 offset-2 text-center pb-2">
                        <h2>REPORTES</h2>
                    </div>
                
                    <Panel header="VENTAS POR CLIENTE" toggleable collapsed={panelCollapsedSale}
                    onToggle={(e) => setPanelCollapsedSale(e.value)}>
                        <Button label="Enviar Reporte" className="p-button-secondary" icon='pi pi-arrow-circle-up' 
                            onClick={function (e){consolidar();}} />                          

                        <Toast ref={toast} />

                        <div className="row m-4">
                            <div className="col-8 offset-2">
                                <DataTable value={ventasPorClientes} dataKey="customerId" className="p-datatble-gridlines">
                                    <Column field="customerId" header="Cedula"></Column>
                                    <Column field="customerName" header="Nombre"></Column>
                                    <Column field="totalSale" header="Valor Total"></Column>
                                </DataTable>
                            </div>
                        </div>

                        <div className="row m-4">
                            <div className="col-2 offset-6">
                                <p class="justificarDerecha m-2"><b>Total Ventas</b></p>
                            </div>
                            <div className="col-2">
                                <input type="text" className="form-control" value={totalVentas} placeholder="" readOnly />
                            </div>
                        </div>
                    </Panel>
                    <Panel header="LISTADO DE CLIENTES" toggleable collapsed={panelCollapsed}
                        onToggle={(e) => setPanelCollapsed(e.value)}>
                    </Panel>
                    <Panel header="LISTADO DE MASCOTAS" toggleable collapsed={panelCollapsed}
                        onToggle={(e) => setPanelCollapsed(e.value)}>
                    </Panel>
                    </Panel>
                
            </div>

    );

}

export default Reports;
