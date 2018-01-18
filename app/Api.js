import 'whatwg-fetch';
 
var Api = {
    getResult(number) {
        var url = "http://localhost:8001/difference?number=" + number;
        var options = this._formOptions('GET');
        return new Promise((resolve, reject) => {
            fetch(url, options)
                .then(resp => {
                    resp.json()
                        .then(json => resolve(json))
                })
                .catch(reason => {
                    reject(reason)
                });
        });
    },
    
    _formOptions: function (method) {
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        var options = {
            method: method,
            headers: headers,
        };

        return options;
    },
};

export default Api;
