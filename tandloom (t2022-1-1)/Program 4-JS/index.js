

let dictionary = function(arr){
let array1 = [1,2,3,4,5,6,7,8,9];
 var result ={};
for (let i=0;i<array1.length;i++){
let res = arr.filter((e)=>{
    if(e % array1[i]==0){
      return e;
     }
})
result[array1[i]]=res.length;

}
console.log(result);
}
dictionary([1,2,8,9,12,46,76,82,15,20,30]);



