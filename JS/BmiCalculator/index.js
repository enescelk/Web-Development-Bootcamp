var weight = parseInt(prompt("Plese enter your weight"))
var height = parseFloat(prompt("Plese enter your height"))

function bmiCalculator(weight,height) {
    var bmi =  weight / Math.pow(height,2);

    if (bmi < 18.5) {
        alert("Your BMI is " + bmi + " so you are underweight");
    }
    else if (bmi >= 18.5 && bmi <= 24.9){
        alert("Your BMI is " + bmi + " so you have a normal weight");
    }
    else if (bmi >= 24.9){
        alert("You BMi is " + bmi + " so you are overweight");
    }
    else{
        console.log(" Please refresh the page and re-enter your information ! ");
    }

    return bmi;
    
}



console.log(bmiCalculator(weight,height));