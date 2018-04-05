/*eslint-env browser*/

function getDomElement(id) {  //3
  var domElement = document.getElementById(id);
  return domElement;
}

function enter(value) {   // 6

  // 7
  result = getDomElement("result");
  result.value += value;
}

function calculate() {    // 8

  //9
  result = getDomElement("result");
  result.value = eval(result.value);
}

function init() {     // 2

  // 4
  
  b1 = getDomElement("one");
  b1.addEventListener("click", function(){ enter(b1.value);}, false);
  
  b2 = getDomElement("two");
  b2.addEventListener("click", function(){ enter(b2.value);}, false);
  
  b3 = getDomElement("three");
  b3.addEventListener("click", function(){ enter(b3.value);}, false);
  
  b4 = getDomElement("four");
  b4.addEventListener("click", function(){ enter(b4.value);}, false);
  
  b5 = getDomElement("five");
  b5.addEventListener("click", function(){ enter(b5.value);}, false);
  
  b6 = getDomElement("six");
  b6.addEventListener("click", function(){ enter(b6.value);}, false);
  
  b7 = getDomElement("seven");
  b7.addEventListener("click", function(){ enter(b7.value);}, false);
  
  b8 = getDomElement("eight");
  b8.addEventListener("click", function(){ enter(b8.value);}, false);
  
  b9 = getDomElement("nine");
  b9.addEventListener("click", function(){ enter(b9.value);}, false);
  
  b_divide = getDomElement("divide");
  b_divide.addEventListener("click", function(){ enter(b_divide.value);}, false);
  
  b_mul = getDomElement("multiply");
  b_mul.addEventListener("click", function(){ enter(b_mul.value);}, false);
  
  b_sub = getDomElement("subtract");
  b_sub.addEventListener("click", function(){ enter(b_sub.value);}, false);
  
  b_per = getDomElement("period");
  b_per.addEventListener("click", function(){ enter(b_per.value);}, false);
  
  b_add = getDomElement("add");
  b_add.addEventListener("click", function(){ enter(b_add.value);}, false);

  b_equal = getDomElement("equal");
  b_equal.addEventListener("click", calculate, false);  // 5
  
}

window.onload = init;  // 1
