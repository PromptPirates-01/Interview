import axios from "axios";

const api = axios.create({
    baseURL: "https://attractive-flexibility-production-5585.up.railway.app/",
});

export default api;