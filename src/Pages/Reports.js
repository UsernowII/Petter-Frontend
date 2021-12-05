import { Panel } from 'primereact/panel';
import { useState, useEffect } from 'react/cjs/react.development';
import { Column } from 'primereact/column';
import { ReportsService } from '../service/ReportsService';
import { DataTable } from 'primereact/datatable';
import Const from '../const'
import './Reports.css'

function Reports() {
    const [ventasPorClientes, setVentasPorClientes] = useState([])
    const [totalVentas, setTotalVentas] = useState(0)
    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (!ready) {
            let reportsService = new ReportsService();
            let total = 0;

            reportsService.customerSales(Const.ciudad).then(data => {
                setVentasPorClientes(data);

                for (let cont = 0; cont < data.length; cont++) {
                    total += data[cont].totalSale;
                }

                setTotalVentas(total);
            });
            setReady(true);
        }
    }, [ready]);

    return (
        <>
            <div style={{ width: '80%', margin: '0 auto', marginTop: '20px' }}>
                <Panel header="REPORTES">

                    <div className="row m-4">
                        <div className="col-8 offset-2 text-center">
                            <h2>Ventas Por Clientes</h2>
                        </div>
                    </div>

                    <div className="row m-4">
                        <div className="col-8 offset-2">
                            <DataTable value={ventasPorClientes} dataKey="customerId" className="p-datatble-gridlines">
                                <Column field="customerId" header="Cedula"></Column>
                                <Column field="customerName" header="Nombre"></Column>
                                <Column field="totalSale" header="Dirección"></Column>
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
            </div>


        </>
    );

}

export default Reports;