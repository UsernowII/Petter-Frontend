import axios from "axios";

export class ConsolidateService {
    baseUrl = "http://localhost:8080/consolidated/";

    constructor(url){
        this.baseUrl = url + "consolidated/";
    }


    async getAll(){
        const res = await axios.get(this.baseUrl + "find/all");
        return res.data;
    
    }

    async save(consolidated){
        const res = await axios.post(this.baseUrl+ "add", consolidated);
        return res.data;
    }

}

