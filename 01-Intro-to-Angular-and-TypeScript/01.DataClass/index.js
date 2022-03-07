var HTTPRequestClass = /** @class */ (function () {
    function HTTPRequestClass(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
    return HTTPRequestClass;
}());
var myData = new HTTPRequestClass('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);
