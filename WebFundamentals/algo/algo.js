var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
    
// your code here!
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i]>=0){
            countPositives++
        }
        
    }

console.log("there are " + countPositives + " positive values");
/*
____________________________________
i =number[0]=3>0| countPositives++=1
i =number[0]=3>0| countPositives++=2
*/