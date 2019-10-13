//获取随机数
function GetRandomNum(Min,Max)
{ 
  var Range = Max - Min; 
  var Rand = Math.random(); 
  return(Min + Math.round(Rand * Range)); 
} 
//获取文本框内容
function checknum()
{
  var num = GetRandomNum(1,20);
  var i;
  for(i=1;i<=5;i++)
  {
    var nums=prompt("Guess a number between 1 and 20. You only have 5 chances!");
    if(nums==num)
    {
      alert("Congratulation! It is right!");
      break;
    }
    else
    {
      if(nums<num)
      {
        alert("Your number is smaller than answer. This is your " + i +"th input");
      }
      else
      {
        alert("Your number is bigger than answer. This is your " + i +"th input");
      }
    }
  }
  if(i==6)
  {
    if(nums!=num)
    {
      alert("Game Over -.-");
      return false;
    }
  }
  var result = prompt("Guess a number between 1 and 20. You only have 5 chances!");
  if (result === null) {
      return;
  }
}
