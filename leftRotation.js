const leftRotation =(arr,rotation) =>{
    const newArr = arr.concat();
    for( let i=0; i<rotation;i++)
    {
        let firstValue = newArr.shift();
        newArr.push(firstValue)
    }
    return newArr;
}


const arr = [1,2,3,4,5]
const rotation = 4;

console.log(leftRotation(arr,rotation))