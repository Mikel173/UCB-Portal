import axios from "axios";

export class ServicioEventos {
  baseUrl = "http://localhost:8080/api/v1/";

  getAll() {

    return axios.get(this.baseUrl + "eventos/").then(res => res.data);
  }

}