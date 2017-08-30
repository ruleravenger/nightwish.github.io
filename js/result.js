/**
 * Created by ok on 2017/8/30.
 */
var multiplyNumbers=document.getElementById('multiply');
var result=document.getElementById('result');
function multiply(){
    var num1=document.getElementById('number1').val;
    var num2=document.getElementById('number2').val;
    var value=num1*num2;
    result.innerHTML="The result is"+value;
    multiplyNumbers.onclick=multiply;
}