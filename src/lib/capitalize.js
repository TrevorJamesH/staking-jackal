const capitalize = (startingString) => {
 var array = startingString.split(' ');
 var result = [];

 for(var i = 0; i < array.length; i++)
    result.push(array[i].slice(0, 1).toUpperCase() + array[i].slice(1).toLowerCase());

  
  return result.join(' ');

}
export default capitalize
