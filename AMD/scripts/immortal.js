define('immortal', function () {
    const obj = {
        getSelector: function (selector) {
            this.selector = document.querySelector(selector);
            return this;
        },
        setValue: function (value) {
            this.selector.innerHTML = value;
            return this;
        }
    };

    var exports = {
        get: obj.getSelector,
        set: obj.setValue
    };

    return exports;
});
