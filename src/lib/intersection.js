const intersection = (array1,array2) => {
  var newArray = [];

  for(let i=0; i < array1.length; i++)

    for(let j=0; j < array2.length; j++)

      if(array1[i] === array2[j]){
        newArray.push(array1[i]);
      }


  return newArray;

}
export default intersection
