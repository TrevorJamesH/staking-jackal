const endsWith = (str, target, position) =>  {
    if (position > 0){
      return str.substr(target.length) && str.charAt(1,position) === target;
  }
    else
      return str.substr(-target.length) === target;
}

export default endsWith
