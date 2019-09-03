const palindromes = function(text) {
    text = removePunct(text); // remove punctuation
    text = allLower(text); // set all chars to loer case
    var pal = true; //defaults to true
    for(i=0;i<text.length;i++){
        if(i<(text.length-i)){ //if not crossed over or same character
            // if NOT the character at i matches corresponding character
            if(!(text.charAt(i) == text.charAt(text.length -1 - i))){
                pal = false; // false if condition met
            }
        }
    }
    return pal;
}

function removePunct(text){
    return text.replace(/\W/g, ''); // regex remove all non alphanumberic
}

function allLower(text){
    return text.toLowerCase(); // String function returns lowercase for all characters
}

module.exports = palindromes
