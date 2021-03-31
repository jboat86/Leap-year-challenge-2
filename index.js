function isLeap(year) {
    
/**************Don't change the code above****************/    
    
    if(year % 4 === 0){
        if(year % 100 === 0){
        if(year % 400 === 0){
     
             return "Leap year.";
            }else{
                return "not Leap year.";
            }
            }else{
                return "Leap year.";
            }
            }else{
                return "not Leap year.";
            
            }
    
}
            
/**************Don't change the code below****************/    
 




    

/**************Don't change the code below****************/    

isLeap(2000)