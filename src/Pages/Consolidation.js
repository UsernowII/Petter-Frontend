import './Consolidation.css'
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Panel } from 'primereact/panel';
import { ConsolidateService } from '../service/ConsolidateService';
import { useState, useEffect} from 'react';



function Consolidation (props){
    

    const [reportConsolidate, setReportConsolidated] = useState([]);
    const consolodidateService = new ConsolidateService(props.url);

    useEffect(() => {
        consolodidateService.getAll().then(res => setReportConsolidated(res));
       
    });

    

    return (
        <div style={{ width: '80%', margin: '0 auto', marginTop: '20px' }}>
            <Panel header="CONSOLIDADO DE VENTAS">
          


            <div className="row m-4">
                <div className="col-8 offset-2">
                    <DataTable  dataKey="id" value={reportConsolidate} className="p-datatble-gridlines">
                        <Column field="city" header="Sucursal"></Column>
                        <Column field="totalSales" header="Valor Total"></Column>
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