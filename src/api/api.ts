import httpSerivce from "../common/http/http.service";

export const api = {
  async getCompanies() {
    return httpSerivce.http.get("companies.json");
  },
  async getProducts() {
    return httpSerivce.http.get("items.json");
  },
};
