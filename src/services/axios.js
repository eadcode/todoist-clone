import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = `${import.meta.env.VITE_API_IP}`;
axiosInstance.defaults.headers.common["Content-Type"] = "application/json";
// axiosInstance.defaults.withCredentials = true;

function getInstance() {
    return axiosInstance;
}

// export function setAxiosAuthorizationHeader(token: string) {
//     axiosInstance.defaults.headers.common.Authorization = token;
// }
//
// export function removeAxiosAuthorizationHeader() {
//     axiosInstance.defaults.headers.common.Authorization = undefined;
// }


export { getInstance };
