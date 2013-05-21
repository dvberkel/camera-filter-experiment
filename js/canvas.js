var thx = thx || {};
(function(thx, document){
    var extend = thx.extend;
    
    thx.createCanvasFrom = function(video, options) {
        options = extend(options || {}, {
            width : 640,
            height: 480
        });
        var canvas = document.createElement('canvas');
        canvas.setAttribute('width', options.width);
        canvas.setAttribute('height', options.height);
        return canvas;
    };
    
    thx.copyVideoToCanvas = function(video, canvas) {
        var ctx = canvas.getContext('2d');
        var width = canvas.getAttribute('width');
        var height = canvas.getAttribute('height');
        ctx.drawImage(video, 0 , 0, width, height);
    };
    
    thx.transformCanvasToCanvas = function(source, target, transformation) {
        transformation = transformation || function(ctx, original){ return original; };
        var width = source.getAttribute('width');
        var height = source.getAttribute('height');
        var sourceCtx = source.getContext('2d');
        var targetCtx = target.getContext('2d');
        var imageData = sourceCtx.getImageData(0, 0, width, height);
        var transform = transformation(targetCtx, imageData);
        targetCtx.putImageData(transform, 0, 0);
    }
})(thx, document);