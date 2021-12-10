import axios from "axios";

export class ConsolidateService {
    baseUrl = "http://54.161.201.128:5001/consolidated/";

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

