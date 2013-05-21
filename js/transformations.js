var thx = thx || {};
(function(thx){
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

    var selectOnlyOneColor = function(residue) {
        return function(ctx, imageData){
            var result = ctx.createImageData(imageData.width, imageData.height);
            for (var index = 0; index < 4*imageData.width*imageData.height; index++){
                if (index % 4 == 3) {
                    result.data[index] = 255;
                } else if (index % 4 == residue) {
                    result.data[index] = imageData.data[index];
                } else {
                    result.data[index] = 0;
                }
            }
            return result
        };
    };

    transformation.onlyRed = selectOnlyOneColor(0);
    transformation.onlyGreen = selectOnlyOneColor(1);
    transformation.onlyBlue = selectOnlyOneColor(2);

    transformation.strategy = {};
    transformation.strategy.lightness = function(r,g,b) {
        return (Math.min(r,g,b) + Math.max(r,g,b))/2;
    };
    transformation.strategy.average = function(r, g, b) {
        return (r + g + b) / 3;
    };
    transformation.strategy.luminosity = function(r, g, b) {
        return 0.21 * r + 0.71 * g + 0.07 * b
    };

    transformation.grayscale = function(ctx, imageData, options){
        options = options || {};
        thx.extend(options, { strategy : transformation.strategy.luminosity });
        var strategy = options.strategy;
        var result = ctx.createImageData(imageData.width, imageData.height);
        var r = 0; var g = 0; var b = 0;
        for (var index = 0; index < 4*imageData.width*imageData.height; index++){
            if (index % 4 == 0) {
                r = imageData.data[index];
            } else if (index % 4 == 1) {
                g = imageData.data[index];
            } else if (index % 4 == 2) {
                b = imageData.data[index];
            } else if (index % 4 == 3) {
                result.data[index] = imageData.data[index];
                var gray = strategy(r, g, b);
                result.data[index-3] = gray;
                result.data[index-2] = gray;
                result.data[index-1] = gray;
            }
        }
        return result
    };

    transformation.shrink = function(ctx, imageData, options){
	options = options || {};
	thx.extend(options, { factor : 4 });
	var factor = options.factor;
	var result = ctx.createImageData(imageData.width / factor, imageData.height / factor);
	for (var index = 0; index < result.data.length; index++){
	    var channel = index % 4;
	    var imageIndex = index / 4;
	    var x = imageIndex % result.width;
	    var y = imageIndex / result.width;
	    result.data[index] = imageData.data[channel + x + y*imageDate.width];
	}
	return result;
    }

    thx.transformation = transformation;
})(thx);
