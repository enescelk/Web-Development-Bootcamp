// var bespoke = prompt("Please enter name");
function bespokeName(bespoke) {
    var friends = ["Angale","Jack","Siri","Geralt"];

    if(friends.includes(bespoke)){
        alert(bespoke + " Will pay the bill");
    }else{
        alert("The name you entered is not in the list !")
    }
}
// bespokeName(bespoke);


function bespokeNumber(){
    var friends = ["Angela","Ben","Jenny","Micheal","Chloe"];
    var numberOfPeople = friends.length();
    var randomOfPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = friends[randomOfPosition];
    return randomPerson + " is going to buy lunch today !";
}

bespokeNumber();
