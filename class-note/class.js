//ES2015 (ES6)
function Person(name,age) {
    this.name = name;
    this.age = age;

}
//생성자 함수

var capt = new Person("캡틴", 100);


class Person{
    //클래스 로직 : 인스턴스생성
    constructor(name,age) {
        console.log("생성되었습니다");
        this.name = name;
        this.age = age;
    }
    

}

var seho = new Person('세호', 30); //인스턴스 생성
console.log("seho", seho);

//class를 왜 쓰는가?
//자바스크립트 프로토타입
//자바스크립트가 프로토타입의 언어입니다.
//

var obj = {a:10};
Object.keys(obj);

//Built-in javascript api javascript api



