// Your JS code here
var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic"
var subDuration = 1;

subTypeElement.addEventListener("change", function(e){
    //the <option> is the target and we are grabbing its value
    subType = e.target.value;

   
});

subDurationElement.addEventListener("change", function(e){
    subDuration = Number(e.target.value);
  
});

var updateSubscriptionDiv = function(){
    monthlyCost = 5;
     if(subType === "standard"){
        monthlyCost = 7;
     } else if(subType === "premium"){
        monthlyCost = 10;
     }
     var total = subDuration * monthlyCost;
     result.innerText = `you have selected ${sub} with Duration with a montly cost of $${subType}. Your total will be $${total} `
}
