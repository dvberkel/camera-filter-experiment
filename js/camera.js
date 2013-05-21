var thx = thx || {};
(function(thx, window, document, undefined){
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
    
    navigator.getUserMedia({ 'video' : true }, function(localMediaStream){
        var video = thx.createVideoFrom(localMediaStream);
        var mirror = thx.createCanvasFrom(video, {width : 640, height : 480 });
        var transform = thx.createCanvasFrom(video, { width : 640, height : 480 });
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(video);
        body.appendChild(mirror);
        body.appendChild(transform);
        var continous = function(){
            requestAnimationFrame(continous);
            thx.copyVideoToCanvas(video, mirror);
            thx.transformCanvasToCanvas(mirror, transform, thx.transformation.onlyRed);
            
        };
        continous();
    });
})(thx, window, document);