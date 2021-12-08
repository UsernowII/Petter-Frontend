import axios from "axios";

export class SalesService {
    baseUrl = "http://localhost:8080/sales/";

    constructor(url){
        this.baseUrl = url + "sales/";
    }

    async save(sales){
        const res = await axios.post(this.baseUrl+ "add", sales);
        return res.data;
    }

}

