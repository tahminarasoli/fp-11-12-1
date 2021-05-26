import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });
// const API = axios.create({ baseURL: "https://helpy-hyf.herokuapp.com" });

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem("profile")) {
//     req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
//   }

//   return req;
// });

export const fetchHelps = (token) =>
    API.get("/api/help/getAllHelps", {
        headers: { Authorization: token },
    });
export const fetchHelp = (id,token) =>
    API.get(`/api/help/getHelp/${id}`, {
        headers: { Authorization: token },
    });
export const createHelp = (newHelp, token) =>
    API.post("/api/help/create", newHelp, {
        headers: { Authorization: token },
    });
export const updateHelp = (id, updatedHelp, token) =>
    API.patch(`/api/help/update/${id}`, updatedHelp, {
        headers: { Authorization: token },
    });
export const deleteHelp = (id, token) =>
    API.delete(`/api/help/delete/${id}`, {
        headers: { Authorization: token },
    });

    export const sendMail = async (receiverEmail,senderEmail,messageTitle,messageContent) => {
        const res = await API.post('/api/send/mail', 
            receiverEmail,senderEmail,messageTitle,messageContent
        )
        console.log(res)
        return res

    }
