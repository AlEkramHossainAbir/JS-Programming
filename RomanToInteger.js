// const roman = {
//    I : 1,
//    V : 5,
//    X : 10,
//    L : 50,
//    C : 100,
//    D : 500,
//    M : 1000,
// }

const s = "IIIXI"
// const arr = s.split('')
// let sum = 0
// for (let i=0;i<s.length;i++)
// {
//    let currentIndex = roman[arr[i]]
//    let nextIndex = roman[arr[i+1]]
//   if(currentIndex<nextIndex){
//    sum += (nextIndex-currentIndex)
//    i++
  
//   }
//   else{
//    sum += currentIndex 
   
//   }
  
// }
// console.log(arr)


const roman = {
   I : 1,
   V : 5,
   X : 10,
   L : 50,
   C : 100,
   D : 500,
   M : 1000,
}
let total =0
s.split('').forEach((value,i)=>{
   (roman[value]<roman[s[i+1]])?   total -= roman[value] : total +=roman[value] 
      console.log(total)
     
})
    