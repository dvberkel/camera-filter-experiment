var thx = thx || {};
(function(){
    var transformation = {}
    
    transformation.identity = function(ctx, imageData){
        var result = ctx.createImageData(imageData.width, imageData.height);
        for (var index = 0; index < 4*imageData.width*imageData.height; index++){
            result.data[index] = imageData.data[index];
        }
        return result;
    }; 
    
    transformation.black = function(ctx, imageData){
        var result = ctx.createImageData(imageData.width, imageData.height);
        for (var index = 0; index < 4*imageData.width*imageData.height; index++){
            if (index % 4 == 3) {
                result.data[index] = 255;
            } else {
                result.data[index] = 0;
            }
        }
        return result;
    }; 
    
    transformation.onlyRed = function(ctx, imageData){
        var result = ctx.createImageData(imageData.width, imageData.height);
        for (var index = 0; index < 4*imageData.width*imageData.height; index++){
            if (index % 4 == 3) {
                result.data[index] = 255;
            } else if (index % 4 == 0) {
                result.data[index] = imageData.data[index];
            } else {
                result.data[index] = 0;            
            }
        }
        return result
    };
    
    thx.transformation = transformation;
})();