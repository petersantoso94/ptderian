export default class ApiHelpers {
    constructor() {
        this.tokenName = 'access_token';
        this.token = this.initAccessToken();
    }

    initAccessToken() {
        this.token = this.getToken(this.tokenName, this.tokenName, JSON.parse);
        return this.token;
    }

    getToken(letName, tokenName, formatter) {
        let token = null;
        let tokenlet = localStorage.getItem(letName);

        try {
            token = formatter(tokenlet)[tokenName];
        } catch (error) {
            token = '';
        }

        return token;
    }

    isTokenEmpty = () => {
        return !this.token;
    }


    setToken(key, value) {
        //token
        let data = {};
        data[key] = value;
        localStorage.setItem(key, JSON.stringify(data));
    }

    renewAccessToken = (token) => {
        this.setToken(this.tokenName, token);

        this.initAccessToken();
    }


    sendRequest = (url, data, method, _headers, callbacks) => {
        if (!callbacks) callbacks = {};

        let headers = Object.assign({}, _headers);
        if (!headers) headers = {};

        headers["Content-Type"] = "application/json";
        headers["Accept"] = "application/json";

        let params = {
            method: method,
            headers: headers,
        };


        if (method === "GET") {
            url = this.buildQueryString(url, data);
        } else {
            params.body = JSON.stringify(data);
        }
        console.log(params);

        return new Promise((resolve, reject) => {
            let fetch_data = () => {
                fetch(url, params)
                    .then(response => response.json())
                    .then(resp => {
                        let { success, code, retry } = resp;

                        if (!success && (code === 0) && retry) {
                            throw resp;
                        }

                        if (callbacks.onSuccess) callbacks.onSuccess();
                        resolve(resp);
                    })
                    .catch(error => {
                        if (error !== 'retry') {
                            if (callbacks.onFail) callbacks.onFail();
                            reject(error);
                            return;
                        }

                        if (callbacks.onRetry) callbacks.onRetry();
                        setTimeout(fetch_data, 2000);

                    });
            }
            fetch_data();
        });
    }


    buildQueryString(url, parameters) {
        let qs = "";
        for (const key in parameters) {
            if (parameters.hasOwnProperty(key)) {
                const value = parameters[key];
                qs +=
                    encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
            }
        }
        if (qs.length > 0) {
            qs = qs.substring(0, qs.length - 1); //chop off last "&"
            url = url + "?" + qs;
        }

        return url;
    }



}  