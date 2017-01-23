const zipWith = (a,b,c) =>  {
  var result = [];
  for(var i=0;i < a.length; i++){
    result.push(a[i]+b[i]+c[i]);
  }
  return result;
}

export default zipWith
//still testing this one
