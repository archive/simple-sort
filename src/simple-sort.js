var orderBy = function(property, useAscending, converter){
    return function(left, right){
 
        left = converter(left[property]);
        right = converter(right[property]);
        
        if(useAscending){
            if(left > right) return 1;
            if(left < right) return -1;
            return 0;    
        }else{
            if(left < right) return 1;
            if(left > right) return -1;
            return 0;            
        }        
    };
}