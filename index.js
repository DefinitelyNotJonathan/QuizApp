function finalPage() {

let currentQuestionIndex=0;
let score=0;
function renderLandingPage() {
  $('form').html(`
    <fieldset class="welcomeField">
        <legend class="welcome">Welcome to The Office Quiz! Test your Office knowledge!</legend>
        <br>
        <br>
        <p>Score 7 out of 10 points to pass!</p>
      </fieldset>
    <button type="button" name="button">Begin</button>
`);
//  $('form').unbind('submit');
}
function renderQuestionPage() {
$('form').html(`
<fieldset class="questionfield">
  <legend class="question">${STORE.question[currentQuestionIndex].question}</legend>
  <br>
  <input type="radio" name="option" id="option-1" value="0" checked required>
  <label for="option-1">${STORE.question[currentQuestionIndex].options[0]}</label>
  <br>
  <br>
  <input type="radio" name="option" id="option-2" value="1" required>
  <label for="option-2">${STORE.question[currentQuestionIndex].options[1]}</label>
  <br>
  <br>
  <input type="radio" name="option" id="option-3" value="2" required>
  <label for="option-3">${STORE.question[currentQuestionIndex].options[2]}</label>
</fieldset>
<button type=button name="button">Submit</button>
`);

$('form').unbind('submit');

//what is this portion for?
$('form).submit(function(e){
});

function renderAnswerPage() {
$('form').html(`
  <fieldset class="questionfield">
      <legend class="question">${STORE.question[currentQuestionIndex].question}</legend>
      <br>
      <input type="radio" name="sample" id="answer" value="0" checked>
      <label id="answer" for="answer">${STORE.question[currentQuestionIndex].answer}</label>
    </fieldset>
  <button type="button" name="button">Continue</button>
`);
//  $('form').unbind('submit');
}

function renderResultsPage() {
  $('form').html(`
    <fieldset class="resultsField">
      <legend class="finalResults">Results</legend>
        <div class="finalScore">5/5
        </div>
      </fieldset>
    <button type="button" name="button">Restart Quiz</button>
  `);
  //  $('form').unbind('submit');
}






function scoreCounter() {
  //keeps track of score, variables est. up top
}

function progressCounter() {
  //keeps track of progress, variables est. up top
}
