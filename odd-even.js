function oddoreven(num){
    if (num%2 == 0){
      return"Even"
    }else{
      return"Odd"
    }
  };
  
  let num = 2;
  let answer = oddoreven(3);
  console.log(answer);