// 화면 정의서 대로 출력
// datatypes : Array, Object
// functions : 3개 만들기
// 답변은 미리 file에 저장된 것을 사용.
// forEach 1회 이상 사용

//프로세스
//입력
//+ 문항 사항 : object in Array -[{문항}, {문항}, {문항}]
//+ 설문 답항 대한 사항
//+ 답변에 대한 사항 - [1, 2, 4, 3]
// 처리
// 출력

const fs = require("fs");

let inputs = fs
  .readFileSync("docs/vanilla_js/javascriptWithPoll.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// 문항
let questions = [
  {
    Qno: "1",
    Q: "교수는 수업 전 강의 목표를 명확히 제시하였습니까?",
    Ano: "E1 E2 E3",
  },
  {
    Qno: "2",
    Q: "강의의 내용은 체계적이고 성의있게 구성되었는가?",
    Ano: "E1 E2",
  },
  {
    Qno: "3",
    Q: "교수는 강의 내용에 대해 전문적 지식이 있었는가?",
    Ano: "E1 E2 E3 E4 E5",
  },
  {
    Qno: "4",
    Q: "강의 진행 속도는 적절하였는가?",
    Ano: "E1 E2 E3",
  },
];

// 문항 문답
for (let i = 0; i < questions.length; i++) {
  printQuestions(i);
  printAnswer(questions[i].Ano);
  console.log(`답)  (${inputs[i]})`);
}

//문항 답
console.log("--------------------- 설문자 선택 --------------------------");

for (let i = 0; i < questions.length; i++) {
  printQuestions(i);
  printResult(i);
}

console.log("이용해주셔서 감사합니다.");

function printQuestions(i) {
  console.log(`${questions[i].Qno}. ${questions[i].Q}`);
}
function printAnswer(Ano) {
  if (Ano == "E1 E2") {
    console.log("(1)전혀 아니다.  (2)아니다.");
  } else if (Ano == "E1 E2 E3") {
    console.log("(1)전혀 아니다.  (2)아니다.  (3) 보통이다.");
  } else if (Ano == "E1 E2 E3 E4") {
    console.log("(1)전혀 아니다.  (2)아니다.  (3) 보통이다.  (4)그렇다.");
  } else if (Ano == "E1 E2 E3 E4 E5") {
    console.log(
      "(1)전혀 아니다.  (2)아니다.  (3) 보통이다.  (4)그렇다.  (5)매우 그렇다."
    );
  }
}

function printResult(i) {
  i++;
  if (i == 1) {
    console.log(`(${i}) 전혀 아니다.`);
  }
  if (i == 2) {
    console.log(`(${i}) 아니다.`);
  }
  if (i == 3) {
    console.log(`(${i}) 그렇다.`);
  }
  if (i == 4) {
    console.log(`(${i}) 매우 그렇다.`);
  }
}
