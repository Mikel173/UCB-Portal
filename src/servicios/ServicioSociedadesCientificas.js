import axios from "axios";

export class ServicioSociedadesCientificas {
    baseUrl = "http://localhost:8080/api/v1/";
    
    getAll() {
        return axios.get(this.baseUrl + "sociedades/cientificas/").then(res => res.data);
    }

}
