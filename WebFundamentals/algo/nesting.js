function nest(arr,value){
for (var i = 0; i <= arr.length; i++) {
   for (var j = 0; j < arr[i].length; j++) {
    if(arr[i][j]===value){
      return true
    }
   }
   return false
}
}


function flatten(arr){
    var flat=[]
for (var i = 0; i < arr.length; i++) {
   for (var j = 0; j < arr[i].length; j++) {
        flat.push(arr[i][j])
   }

}
    return flat
    
}