// 変数の宣言
let num = 30;

//3と5の倍数の場合、“3と5の倍数です”のみが出力される
if (num % 3 == 0 && num % 5 == 0){
  console.log('3と5の倍数です');
}
//3の倍数の場合、“3の倍数です”と出力される
else if (num % 3 == 0) {
  console.log('3の倍数です');
} 
//5の倍数の場合、“5の倍数です”と出力される
else if (num % 5 == 0){
  console.log('5の倍数です');
}
//いずれでもない場合、変数numの値が出力される
else {
  console.log(num);
}


