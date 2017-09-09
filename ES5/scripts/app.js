var app = (function () {

    var exports = {
        get: getSelector,
        set: setValue
    };

    this.selector = null;
    this.value = null;

    function getSelector(selector) {
        this.selector = document.querySelector(selector);
        return exports;
    }

    function setValue(value) {
        this.value = this.selector.innerHTML = value;
        return exports;
    }

    return exports;
})();
