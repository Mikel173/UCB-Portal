import axios from "axios";

export class ServicioGruposInvestigacion {
    baseUrl = "http://localhost:8080/api/v1/";
    
    getAll() {
        return axios.get(this.baseUrl + "grupos/investigaciones/").then(res => res.data);
    }

    postInstitutoInvestigacion(institutoInvestigacion) {
        return axios.post(this.baseUrl + "grupos/investigaciones/", institutoInvestigacion).then(res => res.data);
    }
}
