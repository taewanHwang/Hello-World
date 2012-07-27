console.log(__filename);
console.log(__dirname);

var arr=[1,3,4,5];
console.log("13% \n number:%d \n string:%s",arr[1],arr.toString());
console.info("13% \n number:%d \n string:%s",arr[1],arr.toString());
console.warn("13% \n number:%d \n string:%s",arr[1],arr.toString());
console.error("13% \n number:%d \n string:%s",arr[1],arr.toString());

//100-elements: 17ms
console.time('100-elements');
for (var i = 0; i < 9999999; i++) {
  ;
}
console.timeEnd('100-elements');


