import axios from "axios";

const API_URL = "http://localhost:8080/api/";

const user = JSON.parse(localStorage.getItem("user"));

const headers = {
    'Authorization': 'Bearer ' + user.access_token,
    'Content-Type': 'application/json'
};

const getRooms = () => {
    return axios
        .get(API_URL + "rooms", {headers})
        .then((response) => {
            return response.data;
        })
};

const saveRoom = (data) => {
    console.log(data)
    return axios
        .post(API_URL + "room/save", JSON.stringify(data), {headers})
        .then((response) => {
            return response.status;
        })
};

export default {
    getRooms,
    saveRoom,
};