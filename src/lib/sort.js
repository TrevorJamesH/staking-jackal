const sort = (startingArray) => {
  var newArray = [];
  var loop = startingArray.length;
  var smallestIndex;

  for(let i=0; i < loop; i++){

    smallestIndex = 0;

    for(let j=0; j < startingArray.length; j++){

      if (startingArray[smallestIndex] > startingArray[j]){
        smallestIndex = j;

      }
    }


    newArray.push(startingArray[smallestIndex]);
    startingArray.splice(smallestIndex, 1);
  }
  return newArray;

}
export default sort
