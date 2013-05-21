var thx = thx || {};
(function(thx, window, document, undefined){
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
    
    navigator.getUserMedia({ 'video' : true }, function(localMediaStream){
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(thx.createVideoFrom(localMediaStream));
    });
})(thx, window, document);