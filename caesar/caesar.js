const caesar = function(text,shift) {

    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
    'p','q','r','s','t','u','v','w','x','y','z'];

    var charList = [];

    // for every character in text
    for(i=0;i<text.length;i++){
        // check alpha
        if (!isLetter(text.charAt(i))){
            charList[charList.length] = text.charAt(i);
        } else { // is alpha
            // preserve case
            var upper = false;
            if (text.charAt(i).toUpperCase() === text.charAt(i)) upper = true;
            var shifted = 0;
            // for every character in alphabet
            for(j=0;j<alphabet.length;j++){
                //if it a match
                if(text.charAt(i).toLowerCase()==alphabet[j]){
                    shifted = (j+shift); // character to set to          
                }
            }
            //if out upper bounds
            while (shifted >= alphabet.length) shifted -=alphabet.length;
            //if out lower bounds
            while (shifted < 0) shifted +=alphabet.length;
            // new character
            var newChar = alphabet[shifted];
            if (upper) newChar = newChar.toUpperCase();
         
            charList[charList.length] = newChar;            
        }

    }

    text  = ""
    for (i = 0; i<charList.length;i++){
        text+=charList[i];
    } 
    
    return text;
}

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }

module.exports = caesar
