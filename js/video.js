var thx = thx || {};
(function(thx, window, document){
    thx.createVideoFrom = function(localMediaStream) {
        var video = document.createElement('video');
        video.setAttribute('autoplay', true);
        video.src = window.URL.createObjectURL(localMediaStream);
        return video;        
    }    
})(thx, window, document);