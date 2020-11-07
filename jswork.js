// Task 4 - JS
//
//Zavdannya1
//
// function vivodMasiva(arr ='A masiv to pustyy') {
//  console.log(arr);
// }
// vivodMasiva([1,2,3,4]);
//
//Zavdannya2
//
//    function ZapMasiv (arr){
//     console.log(arr);
//    }
//    let arr= [];
//    for(i=0;i<=10;i++){
//        arr.push(Math.round(Math.random()*100));
//    }
//   ZapMasiv(arr);
//
//Zavdannya3-4
//
// function funk (a,b,c){
//     a=3
//     b=24
//     c=13
//     let minimum = Math.min(a,b,c);
//     let maximum = Math.max(a,b,c);
//     return minimum;
//     return maximum; // Zavd4
// }
//
//Zavdannya5
//
// function funk (a,b,c){
//     let minimum = Math.min(a,b,c);
//     let maximum = Math.max(a,b,c);
//     console.log(maximum);
//     return minimum;
// }
// funk(32,12,30);
//
//Zavdannya6
//
// function vivodMasiva(arr ='A masiv to pustyy') {
//  console.log(arr);
// }
// vivodMasiva([1,2,3,4]);
//
//Zavdannya7-8
//
// function vivodMasiva(arr) {
  //  for (let maximum of arr) {
    //    maximum= Math.max.apply( Math, arr );
    //     console.log(maximum);
//     for (let minimum of arr){  //zavd8
//         minimum= Math.min.apply( Math, arr ); //zavd8
//         console.log(minimum); //zavd8
//  }
// }
// vivodMasiva([1,2,4,3]);
//
//Zavdannya9
//
// function vivodMasiva(arr) {
//   let sum=0;
//     for(i=0;i<arr.length;i++){
//       sum = sum +parseInt(arr[i]);
//     }
//     console.log(sum);
// }
// vivodMasiva([1,2,4,3,2]);
//
//Zavdannya 10
//
// function vivodMasiva(arr) {
//   let sum=0;
//     for(i=0;i<arr.length;i++){
//       sAr = (Math.min.apply( Math, arr )+Math.max.apply( Math, arr ))/2;  
//     }
//     console.log(sAr);
// }
// vivodMasiva([1,10,4,3,2]);
//
//Zavdannya11
//
// function vivodMasiva(arr) {
//       console.log(arr.length);
//   }
//   vivodMasiva([1,2,4,3,2]);
//
//Zavdannya12
//
// function vivodMasiva(arr) {
//         console.log(vivodMasiva.length);
//     }
//     vivodMasiva([1,2,4,3,2]);
//
//Zavdannya13 
// function funk(arri,arrj){
//   let arr3=[];
//   for(i=0,j=0;i<arri.length,j<arrj.length;i++,j++){
//     arr3.push(arri[i]+arrj[j]);
//   }
//   console.log(arr3);
//   return arr3;
// }
// funk([1,2,7,4],[9,3,2,1]);
//
//Zavdannya14
//
// function funk(arr,j){
//   let arr3=[];
//   for(i=j;i<j+1;i=i+2){
//     if(i==arr.length-1){
//       arr3.push(arr[i]);
//       break;
//     }
//     arr3.push(arr[i+1]);
//     arr3.push(arr[i]);  
// }
//   console.log(arr3);
// }
// funk([1,2,7,4,5,9,6],6);
//
//Zavdannya15
//
  // function funk(arr){
  //   let arr3=[];
  //   for(i = arr.length-1; i >=0; i--){
  //     if(arr[i]==0){
  //       arr3.push(arr[i]);
  //     }else{
  //       arr3.unshift(arr[i]);
  //     }
  // }
  //   console.log(arr3);
  // }
  // funk([5,1,0,3,9,2,0,4,7]);
//
//Zavdannya 16
//
// function funk(tag , text) {
//   let div = document.createElement(tag);
//   div.innerHTML = text;
//   document.body.appendChild(div);
  
// }
// funk('div' , 'Hello owu ');
//
//Zavdannya 17
//
// function funk(tag , text) {
//   arguments[0]='div';
//   arguments[1]= "Hello owu";
//   let div = document.createElement(tag);
//   div.innerHTML = text;
//   document.body.appendChild(div);
// }
// funk(1,2);
//
//Zavdannya18
//
// function funk(avt1,i) {
//   if(avt1.i=i){
//     console.log(avt1[i]);
//   }
// }
// funk([{mark: 'Toyota',cost: 3000,i:1},{mark: 'Audi',cost: 2800,i:2},{mark: 'Mercedes',cost:3500,i:3}],1);
//
//Zavdannya19-22
//

function funk(avts) {
  for(i=0;i<avts.length;i++){
    let avt= avts[i];
    let avtomobilDiv = document.createElement('div');
    avtomobilDiv.style.backgroundColor='yellow';
    avtomobilDiv.style.margin='20px';
    avtomobilDiv.innerText= avt.i+" The mark of automobile is: "+avt.mark + " and it cost: "+ avt.cost+"$";
    document.body.appendChild(avtomobilDiv);
  }
}
funk([  {mark: 'Toyota',cost: 3000,i:1},{mark: 'Audi',cost: 2800,i:2},{mark: 'Mercedes',cost:3500,i:3}]);
