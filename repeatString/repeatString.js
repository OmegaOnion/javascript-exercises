const repeatString = function(text,loops) {
    var output = "";

    if (loops<0) return 'ERROR'

    for (i = 0; i < loops; i++){
        output+=text;
    }
    return output;

}

module.exports = repeatString
