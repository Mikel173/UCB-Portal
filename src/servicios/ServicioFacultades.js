import axios from "axios";

export class ServicioFacultades {
  baseUrl = "http://localhost:8080/api/v1/";

  getAll() {

    return axios.get(this.baseUrl + "facultades/").then(res => res.data);
    }

}