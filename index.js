let currentQuestionIndex=0;
let score=0;

function finalPage() {
  function renderLandingPage() {
    $('form').attr('class','welcomeForm');
    $('form').html(`
      <fieldset class="welcomeField">
          <h2 class="welcome">Welcome to The Office Quiz! Test your Office knowledge!</h2>
          <br>
          <br>
          <p>Score 7 out of 10 points to pass!</p>
        </fieldset>
      <button type="submit" name="button">Begin</button>
    `);
    $('form').unbind('submit');
    $('form').submit(function(e){
      e.preventDefault();
      renderQuestionPage();
    });
  }
  function renderQuestionPage() {
    $('form').attr('class','questionForm');
    $('form').html(`
      <fieldset class="questionField">
        <legend class="question">${STORE[currentQuestionIndex].question}</legend>
        <br>
        <input type="radio" name="option" id="option-1" value="${STORE[currentQuestionIndex].options[0]}" checked required>
        <label for="option-1">${STORE[currentQuestionIndex].options[0]}</label>
        <br>
        <br>
        <input type="radio" name="option" id="option-2" value="${STORE[currentQuestionIndex].options[1]}" required>
        <label for="option-2">${STORE[currentQuestionIndex].options[1]}</label>
        <br>
        <br>
        <input type="radio" name="option" id="option-3" value="${STORE[currentQuestionIndex].options[2]}" required>
        <label for="option-3">${STORE[currentQuestionIndex].options[2]}</label>
        <br>
        <br>
        <input type="radio" name="option" id="option-4" value="${STORE[currentQuestionIndex].options[3]}" required>
        <label for="option-4">${STORE[currentQuestionIndex].options[3]}</label>
      </fieldset>
    <div class="buttonContainer">
      <button type="submit" name="button">Submit</button>
    </div>
    <div class="score">
      Score: ${score}/10
    </div>
    <div class="progressCounter">
      Progress: ${currentQuestionIndex+1}/10
    </div>
    `);
    $('form').unbind('submit');
  //submit and answer check
    $('form').submit(function(e){
      e.preventDefault();
      $('button').text('Continue');
      if ($('input:checked').val()!==STORE[currentQuestionIndex].answer){
        let correction=STORE[currentQuestionIndex].answer
        $('legend').attr('class','incorrect')
        $('legend').text("Incorrect, the answer is "+correction+".");
      }
      else {
        $('legend').text('CORRECT!');
        $('form').unbind('submit');
        score++;
      }
      $('form').unbind('submit');
      $('form').submit(function(e){
        e.preventDefault();
        currentQuestionIndex++;
        if (currentQuestionIndex>=STORE.length) {
          renderResultsPage();
          }
        else{
          renderQuestionPage();
          }
        });
    });
  }
  function renderResultsPage() {
    $('form').attr('class','resultsForm');
    if(score>=7){
      $('form').html(`
        <fieldset class="resultsField">
          <h2 class="finalResults">Congratulations, you passed!</h2>
            <div class="finalScore">Final score: ${score}/10
            </div>
        </fieldset>
        <img src="images/pass.jpg" id="passPic">
        <button type="submit" name="button">Restart Quiz</button>
      `);
    }
    else {
      $('form').html(`
        <fieldset class="resultsField">
          <h2 class="finalResults">Sorry, you didn't pass. Try again!</h2>
            <div class="finalScore">Final score: ${score}/10
            </div>
            <img src="images/fail.jpg" id="failPic">
        </fieldset>
        <div class='buttonContainer">
          <button type="submit" name="button">Restart Quiz</button>
        </div>
      `);
    }

    $('form').unbind('submit');
    $('form').submit(function(e) {
      renderLandingPage();
    });
  }

  renderResultsPage();
  renderQuestionPage();
  renderLandingPage();
};


finalPage();
