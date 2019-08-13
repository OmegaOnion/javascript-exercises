const caesar = function(text,shift) {

    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
    'p','q','r','s','t','u','v','w','x','y','z'];

    var shifted = 0;
    // for every character in text
    for(i=0;i<text.length;i++){
        // for every character in alphabet
        for(j=0;j<alphabet.length;j++){
            //if it a match
            if(text.charAt(i).toLowerCase()==alphabet[j]){
                shifted = (j+shift); // character to set to          
            }
        }
        //swap
        if (text.length>1){
            //text = text.substring(0,i-1) + alphabet[shifted] + text.substring(i+1,text.length);
        } else {
            text = alphabet[shifted];
        }
    } 
    
    return text;
}

module.exports = caesar
