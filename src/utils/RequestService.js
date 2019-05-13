import ApiHelpers from './ApiHelpers';

//get url from env
var apiHelpers = new ApiHelpers(), API_URL = "http://localhost:3002";

export const Users_API = {
    getUsers: function (data) {
        return apiHelpers.sendRequest(API_URL+"/users", data, 'GET', {});
    }
};    