interface User {
    age:number;
    name:string;
}


//변수에 활용한 인터페이스
var seho : User = {
    age:12,
    name:"sdd"
}


// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}
const capt =  {
    name:'captain',
    age:14
}
getUser(capt);


// 함수의 스펙(구조)에 인터페이스를 활용한다
interface SumFunction {
(a:number, b:number):number;
}


var sum: SumFunction;

sum = function(a:number,b:number):number{
    return a + b;
}

//인덱싱?
interface StringArray {
    [index: number]: string;
}

var arr:StringArray = ['a','b','c'];
//arr[0] = '10';


//인터페이스 딕셔너리 패턴

interface StringRegexDictionary {
    [key:string]: RegExp;
}

var obj: StringRegexDictionary = {
    // sth:/abc/
    cssFile:/\.css$/,
    jsFile: /\.js$/,
}

obj['cssFile'] = /abc/
Object.keys(obj).forEach(function(value){

})

//인터페이스 확장
//인터페이스를 확장해서

interface Person  {
    name:string;
    age:number;
}


interface Developer extends Person {
    language:string;
}

var captain : Developer = {
    name:"capt",
    age:100,
    language:"ts"
}