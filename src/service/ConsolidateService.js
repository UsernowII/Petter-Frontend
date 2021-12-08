import axios from "axios";

export class ConsolidateService {
    baseUrl

    constructor(url){
        this.baseUrl = url + "consolidated/";
    }

    async getAll(){
        const res = await axios.get(this.baseUrl + "find/all");
        return res.data;

    }

    async save(consolidate){
        const res = await axios.post(this.baseUrl+ "add", consolidate);
        return res.data;
    }

    async delete (id){
        const res = await axios.delete(this.baseUrl+"delete/"+ id);
        return res.data;
    }
    async get(id){
        const res = await axios.get(this.baseUrl + "find/"+id);
        return res.data;

    }

}

