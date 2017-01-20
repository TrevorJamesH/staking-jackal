const intersection = function() {
  var newArray = [];
  var workingArray = arguments[0];

  for(let a = 1; a < arguments.length; a++){
    newArray = [];
    for(let i=0; i < workingArray.length; i++){

      for(let j=0; j < arguments[a].length; j++){

        if(workingArray[i] === arguments[a][j]){
          newArray.push(workingArray[i]);
        }
      }
    }
    workingArray = newArray;
  }

  return newArray;
}
export default intersection
