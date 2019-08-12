const sumAll = function(x,y) {
    // if NaN
    if (!(Number.isInteger(x)) || !(Number.isInteger(y)) ) return 'ERROR';
    // must be positive for some reason
    if(x<0||y<0) return 'ERROR';
    
    // if x>y swap values
    if (x>y) {
        var temp = x;
        x = y;
        y = temp;
    }
    var total = y;
    for (x; x <y;x++){
        total+=x;
    }
    return total;
}

module.exports = sumAll
