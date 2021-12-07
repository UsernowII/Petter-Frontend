import axios from "axios";

export class ReportsService {
    baseUrl = "http://localhost:8080/reports/";

    constructor(url){
        this.baseUrl = url + "reports/";
    }

    async customerSales(){
        const res = await axios.get(this.baseUrl+"customer/sales");
        return res.data;
    }

}

