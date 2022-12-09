// var myfriend=["aarti","alpana","rutu"]
// for (let element in myfriend){
//    console.log(element);
// }

// for (let element of myfriend){
//    console.log(element);
// }

// myfriend.forEach(function(element,index,array){
//    console.log(element+" "+ index+" "+array);
// });


// push method adda new element an array at the end
// const animals=['pigs','goats','sheep'];
// animals.push('chicken','cats','cow')
// const count=animals.push('chickens');
// console.log(animals);
// console.log(count);


// unshift method
// const animals=['pigs','goats','sheep'];
// animals.unshift('chicken')
// const count=animals.unshift('chicken','cow')
// console.log(animals,count)

// unshift method add a new elements an Array
// const mynumbers=[1,2,3,5]
// console.log(mynumbers.unshift(4,6)) it gives array length
// mynumbers.unshift(4,6); it gives [4,6,1,2,3,5]
// console.log(mynumbers);

// shift method remove first array elements
// const name=['alapna','aarti','shruti','grecy','muskan']
// console.log(name)
// console.log(name.shift())
// console.log(name) 


// pop remove last element
// const name=['alapna','aarti','shruti','grecy','muskan']
// console.log(name)
// console.log(name.pop())
// console.log(name) 


// templt literals
// for(let num=1; num<=10; num++){
//     let tableof=12;
//     console.log(` ${tableof} * ${num} = ${tableof*num}`)
// }


// const months=['jan','march','april','june','july']
// const newmonth=months.splice(months.length,0,"dec");
// console.log(months)
// console.log(newmonth)
// const months=['jan','march','april','june','july']
// const updatemonth=months.splice(1,1,'March') index delete and update
// console.log(months)

// const months=['jan','march','april','june','july']
// const indexofmonth=months.indexOf('march');
// if(indexofmonth!=-1){
//     const updatemonth=months.splice(indexofmonth,1,'March')
//     console.log(months);
// }else{
//     console.log('no data found')
// }

// const months=['jan','march','april','june','july']
// const indexofmonth=months.indexOf('june');
// if(indexofmonth!=-1){
//     const updatemonth=months.splice(indexofmonth,1)
//     console.log(months);
//     console.log(updatemonth)
// }else{
//     console.log('no data found')
// }

// const months=['jan','march','april','june','july']
// const indexofmonth=months.indexOf('april');
// if(indexofmonth!=-1){
//     const updatemonth=months.splice(indexofmonth,Infinity)
//     console.log(months);
// }else{
//     console.log('no data found')
// }



// how to take user input in javascript
// var a=require("readline-sync")
// var num=a.questionInt("enter the number")


// var mydetails={name:"aarti",age:23,surname:"biradar"}
// delete mydetails.surname;
// console.log(mydetails)


// var myDetails={
//     "name":"kumar",
//     "age":24
//  }
//  console.log(myDetails.hasOwnProperty("name"));
