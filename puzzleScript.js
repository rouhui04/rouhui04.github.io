//# sourceURL=puzzleScript.js
function enterAns1(){
  var ans1 = prompt("您的答案是：");
  if (ans1) {
    document.getElementById("ans1").innerHTML = "您刚输入的答案是：" + ans1;}
  if (ans1 === "9"){
    alert("恭喜回答正确！赶紧前往下一题吧！")}
  else{
    alert("很遗憾，" + ans1 + " 并不是正确答案，请再想想哦！")}
}
function getHint1(){
  var hint = ["其实可以看出小球的颜色变化和数字对应的关系是二进制，就是‘0’和‘1’。","也可以看成2的次方相加，从2的0次方开始。"];
  for(i=0;i<2;i++){
    alert(hint[i])}
}
function getAns1(){
  alert("正确答案是 9 ")
}
