const chunk = (arr, size) => {

  var newArray = [];

  for (let i = 0 ; i < arr.length; i+=size) {
     newArray.push(arr.slice(i, i +size));
  }
   return newArray;
}
export default chunk
