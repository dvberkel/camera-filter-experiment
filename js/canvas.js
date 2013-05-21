var thx = thx || {};
(function(thx, document){
    var extend = function(target, source){
        for (var key in source) {
            if (! target[key]) {
                target[key] = source[key];
            }
        }
        return target;
    };
    
    thx.createCanvasFrom = function(video, options) {
        options = extend(options || {}, {
            width : 640,
            height: 480
        });
        var canvas = document.createElement('canvas');
        canvas.setAttribute('width', options.width);
        canvas.setAttribute('height', options.height);
        return canvas;
    }
    
    thx.copyVideoToCanvas = function(video, canvas) {
        var ctx = canvas.getContext('2d');
        var width = canvas.getAttribute('width');
        var height = canvas.getAttribute('height');
        ctx.drawImage(video, 0 , 0, width, height);
    }
})(thx, document);