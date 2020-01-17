import axios from 'axios';
import config from "../config/api";

export class apiService {
    constructor(config){
        this.url = config.url
    }
    async countries(){
        try {
            const response = await axios.get(`${this.url}/countries`);
            return response.data;
        } catch (e) {
            console.log(e);
            return Promise.reject(e);
        }
    }
   async cities(){
        try {
            const response = await axios.get(`${this.url}/cities`);
            return response.data;
        } catch (e) {
            console.log(e);
            return Promise.reject(e);
        }
    }
    async airlines(){
        try {
            const response = await axios.get(`${this.url}/airlines`);
            return response.data;
        } catch (e) {
            console.log(e);
            return Promise.reject(e);
        }
    }
   async prices(params){
        try {
            const response = await axios.get(`${this.url}/prices/cheap`, {
                params
            });
            return response.data;
        } catch (e) {
            console.log(e);
            return Promise.reject(e);
        }
    }
}

const api = new apiService(config);

export default api;

