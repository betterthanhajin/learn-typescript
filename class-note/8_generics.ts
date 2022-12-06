



let arr = [1,2,3,4,5];


// function logText2<T>(text:T):T{
//     console.log(text);
//     return text;
// }

// logText2<string>('하이');
// logText2(arr);

function logText(text){
    console.log(text);
    return text;
}


logText("메롱"); //메롱
logText("ㅎㄴㅁㄹㅇ"); //문자열반환
logText('fadsfa');//

//인터페이스에 제네릭을 선언하는 방법
interface Dropdown {
    value:string;
    selected:boolean;
}

//인터페이스에 제네릭선언
interface Dropdown2<T> {
value:T;
selected:boolean;
}


const obj: Dropdown = {value: '10'd, selected: false};

const obj2:Dropdown2<string> = {value:'abc',selected:false};

//const obj3:Dropdown2<number> = {value:'abc' ,selected:false};

// 제네릭의 타입 제한
function logTextLength<T>(text:T[]):T[] {
    console.log(text.length);//배열의 특정 속성에 접근할 수 있다
    text.forEach(function(text){
        console.log(text);
    })
    return text;
}
logTextLength<string>(['hi','abc']);

//제네릭 타입제한 2- 정의된 타입 이용하기
interface LengthType{
    length: number;
}

function logTextLength2<T extends LengthType>(text:T):T {
    text.length;
    return text;
}

logTextLength2('a');
logTextLength2(10);//generic type 제한
logTextLength2({length:10});//generic type 제한
logTextLength2({leng:10});//generic type 제한


//generic type 제한 3- keyof
interface ShoppingItem {
name:string;
price:number;
stock:number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(items:T):T{
    return items;
}

getShoppingItemOption(10);
getShoppingItemOption<string>('10');

getShoppingItemOption('name');