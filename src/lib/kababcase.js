const KababCase = (startingString) => {

  var array = startingString.split('');
  var newArray = [];

  for (let i = 0; i < array.length; i++){

    if(i === 0){
      if( /[A-Za-z0-9]/.test(array[i])){
        newArray.push(array[i].toLowerCase());
      }
    }

    else if(/[A-Za-z0-9]/.test(array[i])){

      if(array[i] == array[i].toUpperCase() && array[i-1] == array[i-1].toLowerCase() && /[A-Za-z0-9]/.test(array[i-1])){
        newArray.push('-');
        newArray.push(array[i].toLowerCase());
      }

      else{
        newArray.push(array[i].toLowerCase())
      }
    }

    //If the array before and after are a letter, and its not the first or last in the array
    else if(/[A-Za-z0-9]/.test(newArray[newArray.length-1]) && /[A-Za-z0-9]/.test(array[i+1]) && i < array.length - 1 && i > 1){
      newArray.push('-');
    }

  }

  var newString = newArray.join('');
	return newString;

}
export default KababCase
