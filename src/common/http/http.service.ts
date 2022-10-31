import axios, { AxiosInstance } from "axios";

class HttpService {
  private httpService: AxiosInstance;
  constructor() {
    this.httpService = axios.create({
      baseURL: "/sources",
    });
  }

  public get http() {
    return this.httpService;
  }
}

export default new HttpService();
