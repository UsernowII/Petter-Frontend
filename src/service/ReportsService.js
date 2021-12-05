import axios from "axios";

export class ReportsService {
    baseUrl = "http://localhost:8080/reports/";

    async customerSales(ciudad){
        const res = await axios.get(this.baseUrl+ ciudad +"/customer/sales");
        return res.data;
    }

}

