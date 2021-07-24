var choice = document.querySelector(".dropdown-menu");
var factor = document.getElementById("factor");
var derive = document.getElementById("derive");
var simplify = document.getElementById("simplify");
var inputVal = document.querySelector("#input");
var dropdown = document.getElementById("dropdownMenuButton1");
var answer = document.querySelector(".answer");

function calculate(choice) {
  console.log(inputVal.value);
  fetch("https://newton.now.sh/api/v2/" + `${choice.id}` + "/" + inputVal.value)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var answerValue = data["result"];
      answer.innerHTML = `The answer is ${answerValue}`;
    })
    .catch((err) => alert("Error, Please Enter a Value"));
}

factor.onclick = () => {
  calculate(factor);
  dropdown.innerHTML = "Factor";
};

derive.onclick = () => {
  calculate(derive);
  dropdown.innerHTML = "Derive";
};

simplify.onclick = () => {
  calculate(simplify);
  dropdown.innerHTML = "Simplify";
};
