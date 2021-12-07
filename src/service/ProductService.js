import axios from "axios";

export class ProductService {
    baseUrl = "http://localhost:8080/pet/";

    constructor(url){
        this.baseUrl = url + "pet/";
    }


    async getAll(){
        const res = await axios.get(this.baseUrl + "find/all");
        return res.data;
    
    }

    async save(product){
        const res = await axios.post(this.baseUrl+ "add", product);
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

