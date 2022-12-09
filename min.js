var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 90, 7];
var min_num=numbers[0]
for (var i=0; i<numbers.length;i++){
    if (numbers[i]<min_num){
        min_num=numbers[i]
    }
}
console.log(min_num)