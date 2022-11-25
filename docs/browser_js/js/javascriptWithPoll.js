const questions_list = [
  {
    question: "해당 매장을 방문시 매장은 청결 하였습니까?",
    questions_uid: "Q1",
    order: 1,
  },
  {
    question: "주문시 직원은 고객님께 친절 하였습니까?",
    questions_uid: "Q2",
    order: 2,
  },
  {
    question: "주문하신 음료가 나오기까지 시간이 적당하였습니까?",
    questions_uid: "Q3",
    order: 3,
  },
  {
    question: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
    questions_uid: "Q5",
    order: 4,
  },
  {
    question: "직원이 제조한 음료에 대해 맛은 좋았습니까?",
    questions_uid: "Q4",
    order: 5,
  },
];

const answer_list = [
  { answer: "전혀 아니다", answer_uid: "E1", order: 1 },
  { answer: "아니다", answer_uid: "E2", order: 2 },
  { answer: "보통이다", answer_uid: "E3", order: 3 },
  { answer: "그렇다", answer_uid: "E4", order: 4 },
  { answer: "매우 그렇다", answer_uid: "E5", order: 5 },
];
const questions_answers = [
  { questions_uid: "Q1", answer_uid: "E1" },
  { questions_uid: "Q1", answer_uid: "E2" },
  //   { questions_uid: "Q1", answer_uid: "E3" },
  { questions_uid: "Q2", answer_uid: "E1" },
  { questions_uid: "Q2", answer_uid: "E2" },
  { questions_uid: "Q2", answer_uid: "E3" },
  //   { questions_uid: "Q2", answer_uid: "E4" },
  { questions_uid: "Q3", answer_uid: "E1" },
  { questions_uid: "Q3", answer_uid: "E2" },
  { questions_uid: "Q4", answer_uid: "E1" },
  { questions_uid: "Q4", answer_uid: "E2" },
  { questions_uid: "Q4", answer_uid: "E3" },
  { questions_uid: "Q4", answer_uid: "E4" },
  { questions_uid: "Q4", answer_uid: "E5" },
  { questions_uid: "Q5", answer_uid: "E1" },
  { questions_uid: "Q5", answer_uid: "E2" },
  { questions_uid: "Q5", answer_uid: "E3" },
];

//예상 묶음 데이터
// [
// [Q1, E1, E2] -> {qustions_uid:Q1 , answer_uids:[E1,E2] , answer :Q2 }
// [Q2, E1, E2, E3] -> {qustions_uid:Q2 , answer_uids:[E1, E2, E3]}
// [Q3, E1, E2]->{qustions_uid:Q3 , answer_uids:[E1,E2]}
// [Q4, E1, E2, E3, E4, E5] ->{qustions_uid:Q4 , answer_uids:[E1, E2, E3, E4, E5]}
// [Q5, E1, E2, E3] ->{qustions_uid:Q5 , answer_uids:[ E1, E2, E3]}
// ]
//1차방식    if(questions_answers[idx-1] != questions_answers[idx]){
// polls.push(questions_answers[idx]); // [Q1,Q2,Q3,Q4,Q5]

// for (let idx = 0; idx < questions_answers.length; idx++) {
//     if(question_compare != questions_answers[idx]['questions_uid']){
//         polls.push(questions_answers[idx]['questions_uid']);
//     }
//     question_compare = questions_answers[idx]['questions_uid']; //이전 uid 입력
//     }

// console.log(polls);

//2차방식 : Array in Array [ [Q1, E1, E2] , [Q2, E1, E2, E3] ... ] ]

//3차방식 : Object in Array [{questions_uid:Q1 , answer_uid:[E1],[E3] .. }]
let polls = [];
let question_compare;
let questions = {}; // 내부 묶음
let answer_uids = []; // 내부 설문 답변 묶음
for (let idx = 0; idx < questions_answers.length; idx++) {
  if (question_compare != questions_answers[idx]["questions_uid"]) {
    if (Object.keys(questions).length > 0) {
      questions["answer_uids"] = answer_uids;
      polls.push(questions);
      questions = {};
      answer_uids = [];
    }

    // console.log(`!= : ${questions_answers[idx]["questions_uid"]}`);
    // console.log(`!= : ${questions_answers[idx]["answer_uid"]}`);
    questions["questions_uid"] = questions_answers[idx]["questions_uid"];
    answer_uids.push(questions_answers[idx]["answer_uid"]);
  } else {
    // console.log(`== : ${questions_answers[idx]["answer_uid"]}`);
    answer_uids.push(questions_answers[idx]["answer_uid"]);
    if (idx + 1 >= questions_answers.length) {
      questions["answer_uids"] = answer_uids;
      polls.push(questions);
    }
  }
  question_compare = questions_answers[idx]["questions_uid"]; // 이전 uid 입력
}

console.log(`${polls}`);

// 출력
// [ {questions_uid:Q1 , answer_uid:[E1],[E3]},{questions_uid:Q1 , answer_uid:[E1],[E3]}  ... ]
// polls[0]['questions_uid']
// polls[0]['answer_uids'][0]
// polls[0]['answer_uids'][1]

// polls[1]['questions_uid']
// polls[1]['answer_uids'][0]
// polls[1]['answer_uids'][1]
// polls[1]['answer_uids'][2]

// 설문 문항을 가져오는 function
//  Q1. 해당 매장을 방문 시 매장은 청결 하였습니까?
// 1. E1
// 2. E2 ...

function getQustionByUid(question_uid) {
  let questions_desc;
  for (qlist of questions_list) {
    if (qlist["questions_uid"] == question_uid) {
      questions_desc = qlist["question"];
    }
  }
  return questions_desc;
}

function getAnswerByUid(answer_uid) {
  let answer_desc = "";
  for (answer of answer_list) {
    if (answer["answer_uid"] === answer_uid) {
      answer_desc = answer["answer"];
      break;
    }
  }
  return answer_desc;
}

// 출력
for (poll of polls) {
  console.log(
    `${poll["questions_uid"]}. ${getQustionByUid(poll["questions_uid"])}`
  );
  let answer_uids = poll["answer_uids"];
  answer_uids.forEach((answer_uid, index) => {
    console.log(`${index + 1}. : ${answer_uid}`);
  });
}

// Event handlers
// Next 클릭 시 순서 있게 설문 표시
// 대상 변수는 polls
let queryNext = document.querySelector("#next");
queryNext.addEventListener("click", setPollContent);

let index = 0;
function setPollContent() {
  if (index == 5) {
    alert("마지막 설문입니다.");
    index = 4;
    return;
  }
  let queryContent = document.querySelector("#poll-contents");
  // polls[0]["questions_uid"]; // 설문 문항
  // polls[0]["answer_uids"]; // 설문 답항 묶음
  // 1. 매장 상태가 좋은가요 ?
  //  (1) 예
  //  (2) 아니다.
  // console.log(getQuestionByUid(polls[index]["questions_uid"]));

  let desc = `<div>${index + 1}. ${getQustionByUid(
    polls[index]["questions_uid"]
  )}</div>`;

  polls[index]["answer_uids"].forEach((answer_uid, index) => {
    // answers
    // console.log(`${index + 1}. ${getAnswerByUid(answer_uid)}`);
    desc += `<div><input type = "radio" id = "id${index}" name = "answer"><label for = "id${index}"> (${
      index + 1
    }) ${getAnswerByUid(answer_uid)}</label></div>`;
  });
  queryContent.innerHTML = desc;
  index++;
}

let queryPrev = document.querySelector("#prev");
queryPrev.addEventListener("click", setPollContentPrev);

function setPollContentPrev() {
  if (index < 0) {
    alert("제일 첫번째 설문입니다.");
    index = 0;
    return;
  }

  let queryContent = document.querySelector("#poll-contents");
  // polls[0]["questions_uid"]; // 설문 문항
  // polls[0]["answer_uids"]; // 설문 답항 묶음
  // 1. 매장 상태가 좋은가요 ?
  //  (1) 예
  //  (2) 아니다.
  // console.log(getQuestionByUid(polls[index]["questions_uid"]));
  let desc = `<div>${index + 1}. ${getQustionByUid(
    polls[index]["questions_uid"]
  )}</div>`;

  polls[index]["answer_uids"].forEach((answer_uid, index) => {
    // answers
    // console.log(`${index + 1}. ${getAnswerByUid(answer_uid)}`);
    desc += `<div><input type = "radio" id = "id${index}" name = "answer"><label for = "id${index}"> (${
      index + 1
    }) ${getAnswerByUid(answer_uid)}</label></div>`;
  });
  queryContent.innerHTML = desc;
  index--;
}
