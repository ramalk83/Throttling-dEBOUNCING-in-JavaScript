function chunkArrayInGroups(arr, size) {
    //declare the result
    let result=[];
    //for loop to take element in array
    while(arr.length){
      result.push(arr.splice(0,size))
    }
    //
    console.log(result);
    return result;
  }
  
  
  function chunkArrayInGroups1(arr, size) {
    //declare the result
    let result=[];
    if (arr.length <= size) {
      return [arr];
    } else {
      result= [arr.slice(0, size)].concat(
        chunkArrayInGroups1(arr.slice(size), size)
      );
    }
    console.log(result);
    return result;
  }
  
  chunkArrayInGroups1(["a", "b", "c", "d","g","h","a","m"], 2);
  chunkArrayInGroups(["a", "b", "c", "d"], 2);