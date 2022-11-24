function logMessage(value:any) {
    console.log(value);
}

logMessage('hello');
logMessage(2);


//union type 1가지 이상의 타입을 사용하고 싶을때
function logMessage2(value:string | number) {
    console.log(value);
}


logMessage2("hellos");
logMessage2(2);

var seho : string | number | boolean;
function log(value:string | number) {
    if(typeof value === 'number') {
        value.toLocaleString();
    }

    if(typeof value === 'string') {
        value.toString();
    }

    throw new TypeError('value must be strubg or number');
}

log('hello');
log(199);


interface Developer{
name:string;
skill:string;
}

interface Person {
name:string;
age:number;
}


function askSomeone(someone : Developer | Person) {
    // someone.name;
    // someone.skill;
    // someone.age;

}

askSomeone({name: 'dev', skill: 'web'});
askSomeone({name:'capy', age:23});







var capt: string & number & boolean;
//인터섹션이기때문에 developer와 person의 속성 둘다 넘겨야함
function askSomeone2(someone : Developer & Person) {
    someone.age;
    someone.name;
    someone.skill;
}

askSomeone2({name:"dd", age:23,skill:'ddsf'});



