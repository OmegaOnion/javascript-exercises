const reverseString = function(text) {
    var reversed = "";
    for(i=0;i<=text.length;i++){
        reversed += text.charAt((text.length-i))
    }
    return reversed;
}

module.exports = reverseString
