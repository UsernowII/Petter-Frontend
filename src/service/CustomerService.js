import axios from "axios";

export class CustomerService {
    baseUrl = "http://localhost:8080/customer/";


    async getAll(){
        const res = await axios.get(this.baseUrl + "find/all");
        return res.data;
    
    }

    async save(customer){
        const res = await axios.post(this.baseUrl+ "add", customer);
        return res.data;
    }

    async delete (id){
        const res = await axios.delete(this.baseUrl+"delete/"+ id);
        return res.data;
    }
}

