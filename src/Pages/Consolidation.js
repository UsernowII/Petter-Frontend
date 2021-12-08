import './Consolidation.css'
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Panel } from 'primereact/panel';
import { Toast } from 'primereact/toast';

function Consolidation (){
    return (
        <div style={{ width: '80%', margin: '0 auto', marginTop: '20px' }}>
        <Panel header="REPORTES">
          
            <Toast/>
                <div className="row m-4">
                    <div className="col-8 offset-2 text-center">
                        <h2>CONSOLIDADO DE VENTAS</h2>
                    </div>
                </div>

            <div className="row m-4">
                <div className="col-8 offset-2">
                    <DataTable  dataKey="customerId" value="" className="p-datatble-gridlines">
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
                    <input type="text" className="form-control" value="" placeholder="" readOnly />
                </div>
            </div>
        </Panel>
    </div>
    );
}

export default Consolidation;