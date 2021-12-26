import axios from "axios";
import qs from 'qs';

const API_URL = "http://localhost:8080/api/";

const register = (email, password) => {
    return axios.post(API_URL + "user/save", qs.stringify({ email: email, password: password }))
};

const login = (email, password) => {
    return axios
        .post(API_URL + "login", qs.stringify({ email: email, password: password }))
        .then((response) => {
            if (response.data.access_token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        })
};

const logout = () => {
    localStorage.removeItem("user");
};

export default {
    register,
    login,
    logout,
};