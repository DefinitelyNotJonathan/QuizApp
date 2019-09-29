function finalPage() {

let currentQuestionIndex=0;
let score=0;
function renderQuestionPage() {
$('fieldset').html(`
<legend class="question">${STORE.question[currentQuestionIndex].question}</legend>
<br>
<input type="radio" name="sample" id="ans-great-1" value="0" checked required>
<br>
<br>
<input type="radio" name="sample" id="ans-great-2" value="1" required>
<label for="ans-great-2">${STORE.question[currentQuestionIndex].answers[1]}</label>
<br>
<br>
<input type="radio" name="sample" id="ans-great-3" value="2" required>
<label for="ans-great-3">${STORE.question[currentQuestionIndex].answers[2]}</label>
`);

$('form').unbind('submit');
$('form).submit(function(e){
});
