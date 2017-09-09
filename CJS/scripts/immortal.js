module.exports = {

    get: function (selector) {
        this.selector = document.querySelector(selector);
        return this;
    },

    set: function (value) {
        this.selector.innerHTML = value;
        return this;
    }

};
