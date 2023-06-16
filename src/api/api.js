import axios from "axios";
//"API WITH FLASK"

const api = axios.create({
    baseURL: "http://10.33.14.134/",
});

const credentialsPadtec = {
    username: "noc-arc",
    password: "noc@altarede",
};

async function getToken() {
    try {
        const token = await api.post("/api/auth/login", credentialsPadtec);
        return token.data.token;
    } catch (error) {
        return error.message;
    }
}

const header = { Authorization: await getToken() };

function Request() {
    this.get = async function (endpoint) {
        try {
            const response = await api.get(endpoint, { headers: header });
            return response;
        } catch (error) { }
    };
    this.post = async function (endpoint) {
        try {
            const response = await api.post(endpoint, { headers: header });
            return response;
        } catch (error) { }
    };
}

export const apiPadtec = new Request();
