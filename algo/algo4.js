// bubbleSort()
/* 
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
    -> Assume there are no duplicates
*/
//             i
//               j
const nums1 = [5, 3, 4, 2, 1];
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function bubbleSort(arr) { k
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i],"dddd")
        for (let j = i+1; j < arr.length; j++) {
        console.log(arr[j],"eeee")
            
            if(arr[i]>arr[j]){
                temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
                
            }
        }
    }
    return arr
}