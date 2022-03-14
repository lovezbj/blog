# 2022年大前端热点技术
2018年后，整个大前端发展趋于稳定，各大主流框架的特性变少，各种新轮子也在逐渐变少，但在多端融合、上下游提效以及一些细分领域，还是有很多值得期待的。

本文将基于过去一年大前端方向在Web、Node、多端、IoT、智能化五个领域的发展，为大家梳理出一些22年值得大家关注的大前端热点技术。
## 1 掌握这20个JS技巧，做一个不加班的前端人
本文分享自华为云社区《提高代码效率的 20 个JavaScript 技巧和窍门》，作者：海拥 。

在我们的日常任务中，我们会编写诸如排序、搜索、查找唯一值、传递参数、交换值等功能，所以在这里我列出了我的速记技巧列表！

这些方法肯定会帮助您：

减少 LOC（代码行数）的数量，
编码比赛，
黑客马拉松
或其他限时任务。

大多数这些 JavaScript Hacks 使用 ECMAScript6(ES2015) 以后的技术，尽管最新版本是 ECMAScript11(ES2020)。

作者：华为云开发者社区
链接：https://juejin.cn/post/7068853819135754253
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
### 1.1 声明和初始化数组
我们可以使用默认值（如""、null或 ）初始化特定大小的数组0。您可能已经将这些用于一维数组，但如何初始化二维数组/矩阵呢？
const array = Array(5).fill(''); 
// 输出
(5) ["", "", "", "", ""]

const matrix = Array(5).fill(0).map(()=>Array(5).fill(0)); 
// 输出
(5) [Array(5), Array(5), Array(5), Array(5), Array(5)]

0: (5) [0, 0, 0, 0, 0]

1: (5) [0, 0, 0, 0, 0]

2: (5) [0, 0, 0, 0, 0]

3: (5) [0, 0, 0, 0, 0]

4: (5) [0, 0, 0, 0, 0]

length: 5

### 1.2 找出总和、最小值和最大值
我们应该利用reduce方法来快速找到基本的数学运算。

const array  = [5,4,7,8,9,2];

* 和

array.reduce((a,b) => a+b);
// 输出: 35

* 最大限度

array.reduce((a,b) => a>b?a:b);
// 输出: 9

* 最小

array.reduce((a,b)=> a < b?a:b);
// 输出: 2
### 1.3 对字符串、数字或对象数组进行排序

我们有内置的方法sort()和reverse()用于对字符串进行排序，但是数字或对象数组呢？

让我们看看数字和对象的升序和降序排序技巧。

* 排序字符串数组

const stringArr = ["Joe", "Kapil", "Steve", "Musk"]
stringArr.sort();

// 输出

(4) ["Joe", "Kapil", "Musk", "Steve"]

stringArr.reverse();

// 输出

(4) ["Steve", "Musk", "Kapil", "Joe"]

* 排序数字数组

const array  = [40, 100, 1, 5, 25, 10];

array.sort((a,b) => a-b);

// 输出

(6) [1, 5, 10, 25, 40, 100]

array.sort((a,b) => b-a);

// 输出

(6) [100, 40, 25, 10, 5, 1]

* 对象数组排序
const objectArr = [ 
    { first_name: 'Lazslo', last_name: 'Jamf'},
    { first_name: 'Pig',    last_name: 'Bodine'},
    { first_name: 'Pirate', last_name: 'Prentice'}
];

objectArr.sort((a, b) => a.last_name.localeCompare(b.last_name));

// 输出

(3)[{…}, {…}, {…}];

0: {first_name: "Pig", last_name: "Bodine"};

1: {first_name: "Lazslo", last_name: "Jamf"};

2: {first_name: "Pirate", last_name: "Prentice"};

length: 3;

### 1.4从数组中过滤出虚假值
Falsy值喜欢0，undefined，null，false，""，''可以很容易地通过以下方法省略

const array = [3, 0, 6, 7, '', false];
array.filter(Boolean);

// 输出

(3) [3, 6, 7];

### 1.5对各种条件使用逻辑运算符
如果你想减少嵌套 if…else 或 switch case，你可以简单地使用基本的逻辑运算符AND/OR。

function doSomething(arg1){ 
    arg1 = arg1 || 10; 
// 如果尚未设置，则将 arg1 设置为 10 作为默认值
return arg1;
}

let foo = 10;  

foo === 10 && doSomething(); 

// is the same thing as if (foo == 10) then doSomething();

// 输出: 10

foo === 5 || doSomething();

// is the same thing as if (foo != 5) then doSomething();

// 输出: 10

### 1.6删除重复值
您可能已经将 indexOf() 与 for 循环一起使用，该循环返回第一个找到的索引或较新的 includes() 从数组中返回布尔值 true/false 以找出/删除重复项。 这是我们有两种更快的方法。

const array  = [5,4,7,8,9,2,7,5];

array.filter((item,idx,arr) => arr.indexOf(item) === idx);

// or

const nonUnique = [...new Set(array)];

// 输出: [5, 4, 7, 8, 9, 2]

### 1.7创建计数器对象或映射
大多数情况下，需要通过创建计数器对象或映射来解决问题，该对象或映射将变量作为键进行跟踪，并将其频率/出现次数作为值进行跟踪。

let string = 'kapilalipak';

const table={}; 

for(let char of string) {
  table[char]=table[char]+1 || 1;
};

// 输出

{k: 2, a: 3, p: 2, i: 2, l: 2};

和

const countMap = new Map();

for (let i = 0; i < string.length; i++) {
    if (countMap.has(string[i])) {
      countMap.set(string[i], countMap.get(string[i]) + 1);
    } else {
      countMap.set(string[i], 1);
    }
};

// 输出

Map(5) {"k" => 2, "a" => 3, "p" => 2, "i" => 2, "l" => 2};

### 1.8三元运算符很酷
您可以避免使用三元运算符嵌套条件 if…elseif…elseif。

function Fever(temp) {
    return temp > 97 ? 'Visit Doctor!'
      : temp < 97 ? 'Go Out and Play!!'
      : temp === 97 ? 'Take Some Rest!';
};

// 输出

Fever(97): "Take Some Rest!";

Fever(100): "Visit Doctor!";

### 1.9与旧版相比，for 循环更快

* for并for..in默认为您提供索引，但您可以使用 arr[index]。
* for..in 也接受非数字，所以避免它。
* forEach,for...of直接获取元素。
* forEach也可以为您提供索引，但for...of不能。
* for并for...of考虑阵列中的孔，但其他 2 个不考虑。

### 1.10合并2个对象
通常我们需要在日常任务中合并多个对象。

const user = { 
 name: 'Kapil Raghuwanshi', 
 gender: 'Male' 
};

const college = { 
 primary: 'Mani Primary School', 
 secondary: 'Lass Secondary School' 
};

const skills = { 
 programming: 'Extreme', 
 swimming: 'Average', 
 sleeping: 'Pro' 
};

const summary = {...user, ...college, ...skills};

// 输出

gender: "Male";

name: "Kapil Raghuwanshi";

primary: "Mani Primary School";

programming: "Extreme";

secondary: "Lass Secondary School";

sleeping: "Pro";

swimming: "Average";

### 1.11箭头函数
箭头函数表达式是传统函数表达式的紧凑替代品，但有局限性，不能在所有情况下使用。由于它们具有词法范围（父范围）并且没有自己的范围this，arguments因此它们指的是定义它们的环境。

const person = {
    name: 'Kapil',
    sayName() {
        return this.name;
    }
};

person.sayName();

// 输出

"Kapil";

但

const person = {
    name: 'Kapil',
    sayName : () => {
        return this.name;
    }
};

person.sayName();

// 输出

"";

### 1.12可选链
可选的链接 ?.如果值在 ? 之前，则停止评估。为 undefined 或 null 并返回
undefined。

const user = {
  employee: {
    name: "Kapil"
  }
};

user.employee?.name;

// 输出: "Kapil"

user.employ?.name;

// 输出: undefined

user.employ.name;

// 输出: VM21616:1 Uncaught TypeError: Cannot read property 'name' of undefined

### 1.13打乱数组
利用内置Math.random()方法。

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

list.sort(() => {
    return Math.random() - 0.5;
});

// 输出

(9) [2, 5, 1, 6, 9, 8, 4, 3, 7];

// Call it again

(9) [4, 1, 7, 5, 3, 8, 2, 9, 6];

### 1.14空合并算子
空合并运算符 (??) 是一个逻辑运算符，当其左侧操作数为空或未定义时返回其右侧操作数，否则返回其左侧操作数。

const foo = null ?? 'my school';

// 输出: "my school"

const baz = 0 ?? 42;

// 输出: 0

### 1.15Rest & Spread 运算符
那些神秘的3点...可以休息或传播！🤓

function myFun(a,  b, ...manyMoreArgs) {
   return arguments.length;
};

myFun("one", "two", "three", "four", "five", "six");

// 输出: 6

和

const parts = ['shoulders', 'knees']; 

const lyrics = ['head', ...parts, 'and', 'toes']; 

lyrics;

// 输出: 

(5) ["head", "shoulders", "knees", "and", "toes"];

### 1.16默认参数
const search = (arr, low=0,high=arr.length-1) => {
    return high;
};

search([1,2,3,4,5]);

// 输出: 4

### 1.17将十进制转换为二进制或十六进制
在解决问题的同时，我们可以使用一些内置的方法，例如.toPrecision()或.toFixed()来实现许多帮助功能。

const num = 10;

num.toString(2);

// 输出: "1010"

num.toString(16);

// 输出: "a"

num.toString(8);

// 输出: "12"

### 1.18使用解构简单交换两值
let a = 5;

let b = 8;

[a,b] = [b,a]

[a,b];
// 输出

(2) [8, 5];

### 1.19单行回文检查
嗯，这不是一个整体的速记技巧，但它会让你清楚地了解如何使用弦乐。

function checkPalindrome(str) {
  return str == str.split('').reverse().join('');
};

checkPalindrome('naman');

// 输出: true

### 1.20将Object属性转成属性数组
使用Object.entries(),Object.keys()和Object.values();

const obj = { a: 1, b: 2, c: 3 };

Object.entries(obj);

// 输出

(3) [Array(2), Array(2), Array(2)];

0: (2) ["a", 1];

1: (2) ["b", 2];

2: (2) ["c", 3];

length: 3;

Object.keys(obj);

(3) ["a", "b", "c"];

Object.values(obj);

(3) [1, 2, 3];
