var thx = thx || {};
(function(thx, document){
    thx.extend = function(target, source){
        for (var key in source) {
            if (! target[key]) {
                target[key] = source[key];
            }
        }
        return target;
    };
})(thx, document);