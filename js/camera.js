(function(window, document, undefined){
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
    
    navigator.getUserMedia({ 'video' : true }, function(localMediaStream){
        var body = document.getElementsByTagName('body')[0];
        var video = document.createElement('video');
        video.setAttribute('autoplay', true);
        video.src = window.URL.createObjectURL(localMediaStream);
        body.appendChild(video);
    });
})(window, document);