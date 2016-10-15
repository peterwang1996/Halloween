'use strict';

var storage = {
    prefix: 'ghostgame',
    get: function(index) {
        return localStorage.getItem(this.prefix + '-' + index);
    },
    set: function(index, data) {
        localStorage.setItem(this.prefix + '-' + index, data);
    }
}