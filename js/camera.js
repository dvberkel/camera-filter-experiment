var thx = thx || {};
(function(thx, window, document, undefined){
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
    
    navigator.getUserMedia({ 'video' : true }, function(localMediaStream){
        var video = thx.createVideoFrom(localMediaStream);
        var canvas = thx.createCanvasFrom(video, {width : 640, height : 480 });
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(video);
        body.appendChild(canvas);
        var continous = function(){
            requestAnimationFrame(continous);
            thx.copyVideoToCanvas(video, canvas);
            
        };
        continous();
    });
})(thx, window, document);