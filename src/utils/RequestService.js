var API_URL = "http://localhost:3002";

export const Users_API = {
    getUsers: function (data) {
        return window.apiHelpers.sendRequest(API_URL + "/users", data, 'GET', {});
    }
};    