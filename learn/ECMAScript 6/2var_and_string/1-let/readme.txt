let
let是ES6中新增关键字。

它的作用类似于var，用来声明变量，但是所声明的变量，只在let命令所在的代码块内有效。

if(true){
    var a = 1;
    let b = 2;
}
document.write(a);
document.write(b);  // 报错：ReferenceError: b is not defined
体会下let和var的作用域范围:

function f1() {
  var a = 8;
  let n = 5;
  if (true) {
      let n = 10;
      var a = 20
  }
  document.write(n); // 5
  document.write(a); // 20
}
f1();
请在右侧的环境中，用let声明a变量默认为5，在if判断中let声明a为10，看a输出结果。