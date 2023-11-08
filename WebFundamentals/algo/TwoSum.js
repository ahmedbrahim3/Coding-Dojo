function targetsum(arr,target){
    for (var i = 0; i < arr.length; i++) {
       for (var j = i+1; j < arr.length; j++) {
        if(arr[i]+arr[j]===target){
            return [arr[i],arr[j]]
        }
       }
    }
}