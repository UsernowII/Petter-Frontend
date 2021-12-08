import axios from "axios";

export class ConsolidateService {
    baseUrl = "http://localhost:8080/consolodiated/";

    constructor(url){
        this.baseUrl = url + "consolidated/";
    }

    async getAll(){
        const res = await axios.get(this.baseUrl + "find/all");
        console.log(res)
        return res.data;

    }

    async save(consolidate){
        const res = await axios.post(this.baseUrl+ "add", consolidate);
        return res.data;
    }


}

