var year = parseInt(prompt("Please enter year"));
function isLeap(year){
    
    if(year % 4 ===0){
        if(year % 100 === 0){
            if(year % 400 === 0 ){
                alert(year + " It's leap year");
            }else{
                alert(year + " It's not leap year")
            }
        }else{
            alert(year + " It's leap year")
        }
    }else{
        alert(year +" It's not leap year" )
    }
}

isLeap(year);