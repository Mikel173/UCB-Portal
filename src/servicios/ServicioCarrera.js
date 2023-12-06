import axios from "axios";

export class ServicioCarrera {
  baseUrl = "http://localhost:8080/api/v1/";

  getAll() {
    return axios.get(this.baseUrl + "carreras/").then((res) => res.data);
  }
}