var removeFromArray = function(array, ...values) {
    //array.splice(i,1);
    for(i=array.length-1;i>=0;i--){
        for (j = 0; j<values.length;j++){
            if(array[i] === values[j]) array.splice(i,1);
        }        
    }
    return array;
}


module.exports = removeFromArray
