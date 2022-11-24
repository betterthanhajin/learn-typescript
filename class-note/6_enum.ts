//숫자형 이넘
enum Shoes{
    Nike,
    Adidas
}

var myShoes = Shoes.Nike;

console.log(myShoes);
//문자형 이넘
enum Brands {
chanel = "샤넬",
gucci = "구찌"
}

var brands = Brands.chanel;
console.log(brands);

//*이넘 활용 사례 예외처리 케이스가 많이 줄어듬
enum Answer{
    Yes = 'Yes',
    No = 'No'
}
//예제
function askQuestion(answer:Answer ){
    if(answer === Answer.Yes) {
        console.log("correct")
    }

    if(answer === Answer.No) {
        console.log("incorrect")
    }
}
askQuestion(Answer.Yes);

// askQuestion('Yes');
// askQuestion('y');
// askQuestion('예스');//에러발생