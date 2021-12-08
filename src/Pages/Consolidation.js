import './Consolidation.css'
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Panel } from 'primereact/panel';
import { ConsolidateService } from '../service/ConsolidateService';
import { useState, useEffect} from 'react';



function Consolidation (props){
    
    const [ready, setReady] =useState(false)
    const [reportConsolidate, setReportConsolidated] = useState([]);
    const [totalSales, setTotalSales]= useState("")

    useEffect(() => {
        if(!ready){
            let consolodidateService = new ConsolidateService();
            consolodidateService.getAll().then(res => {
                setReportConsolidated(res);

                let sum = 0;

                for(var cont = 0; cont < res.length; cont++){
                    sum += res[cont].totalSales;
                }

                setTotalSales(sum);
            });
        }

        setReady(true);
    }, [ready]);

    

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
                    <input type="text" className="form-control" value={totalSales} placeholder="" readOnly />
                </div>
            </div>
        </Panel>
    </div>
    );
}

export default Consolidation;