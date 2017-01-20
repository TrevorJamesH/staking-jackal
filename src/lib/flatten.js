const flatten = (startingArray) => {
  var newArray = [];

    for (let i = 0; i < startingArray.length; i++){

      if(Array.isArray(startingArray[i])){

        for (let j = 0; j < startingArray[i].length; j++){
          newArray.push(startingArray[i][j]);
        }
      }

      else{
        newArray.push(startingArray[i]);
      }
    }

  return newArray;

}
export default flatten
