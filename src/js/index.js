//npm init -y
//npm install -D parcel@next
//"start": "parcel serve ./src/index.html",
  //  "build": "parcel build ./src/index.html"

  console.log("connected");

const submitButton = document.querySelector("#submit-button");

function submitAnswers() {
  const total = 10; 
  let score = 0; 
  const n1 = document.forms["DS3"]["n1"].value;
  const n2 = document.forms["DS3"]["n2"].value;
  const n3 = document.forms["DS3"]["n3"].value;
  const n4 = document.forms["DS3"]["n4"].value;
  const n5 = document.forms["DS3"]["n5"].value;
  const n6 = document.forms["DS3"]["n6"].value;
  const n7 = document.forms["DS3"]["n7"].value;
  const n8 = document.forms["DS3"]["n8"].value;
  const n9 = document.forms["DS3"]["n9"].value;
  const n10 = document.forms["DS3"]["n10"].value;
 
  for (let i = 1; i <= total; i++) {
    if (eval("n" + i) == null || eval("n" + i) == "") {
      alert("Go back Ashen One,your quest is incomplete" + i);
    }
  }

  const answers = ["a", "c", "c", "a", "d", "a", "c", "d", "b", "a"];

  for (let i = 1; i <= total; i++) {
    if (eval("n" + i) == answers[i - 1]) {
      score++; 
    }
  }
  console.log("You got " + score + " out of " + total); 
  const results = document.getElementById("results");
  const reaction = document.getElementById("reaction");
  results.innerText = `You got ${score} out of 10.`;
  if (score === 10) {
    reaction.innerText =
      "You spend too much time on this game, go outside";
  }
  if (score >= 7 && score < 10) {
    reaction.innerText = "";
  }
  if (score >= 4 && score < 7) {
    reaction.innerText =
      "Good job Skeleton, no prize ahead";
  }
  if (score >= 1 && score < 4) {
    reaction.innerText =
      "Probably a dex build";
  }
  if (score === 0) {
    reaction.innerText =
      "FILTHY CASUL DETECTED. LETHAL FORCE ENGAGED";
  }
}

submitButton.addEventListener("click", function (e) {
  submitAnswers();
  e.preventDefault();
});