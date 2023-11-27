import axios from "axios";

export class ServicioCentrosInvestigacion {
    baseUrl = "http://localhost:8080/api/v1/";
    
    getAll() {
        return axios.get(this.baseUrl + "centros/investigaciones/").then(res => res.data);
    }

    postInstitutoInvestigacion(institutoInvestigacion) {
        return axios.post(this.baseUrl + "centros/investigaciones/", institutoInvestigacion).then(res => res.data);
    }
}
