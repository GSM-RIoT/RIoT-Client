import axios from 'axios';

export const Api = async (param) => {
    return await axios.post("http://10.120.75.224:3000/manual", {
        "idValue": param
    }).catch(function (error) {
        return (error.response);
    })
}