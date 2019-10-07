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
      <div class="buttonContainer">
        <button id="beginButton" type="submit" name="button">Begin</button>
      </div>
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
        <legend class="question" name="question">${STORE[currentQuestionIndex].question}</legend>
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
      <button type="submit" name="button" id="submitButton">Submit</button>
    </div>
    <div class="score">
      Score: ${score}/10
    </div>
    <div class="progress">
      Progress: ${currentQuestionIndex+1}/10
    </div>
    `);
    $('form').unbind('submit');
  //submit and answer check
    $('form').submit(function(e){
      e.preventDefault();
      $('.score').hide();
      $('.progress').hide();
      $('button').text('Continue');
      if ($('input:checked').val()!==STORE[currentQuestionIndex].answer){
        let correction=STORE[currentQuestionIndex].answer
        $('legend').attr('class','incorrect');
        $('button').attr('id','incorrectButton');
        $('legend').text("Incorrect, the answer is "+correction+".");
        $('.score').hide();
        $('.progress').hide();
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
        <img src="images/pass.jpg" id="passPic" alt="image of trophy">
        <button type="submit" name="button" class="restartButton">Restart</button>
      `);
    }
    else {
      $('form').html(`
        <fieldset class="resultsField">
          <h2 class="finalResults" name="results">Sorry, you didn't pass. Try again!</h2>
            <div class="finalScore" name="finalScore">Final score: ${score}/10
            </div>
            <img src="images/fail.jpg" id="failPic" alt="image of cringing face">
        </fieldset>
        <div class="buttonContainer">
          <button type="submit" name="button" class="restartButton" >Restart</button>
        </div>
      `);
    }
    $('button').css('margin','20px');
    $('form').unbind('submit');
    $('form').submit(function(e) {
      e.preventDefault();
      currentQuestionIndex=0;
      score=0;
      renderLandingPage();

    });
  }

  renderResultsPage();
  renderQuestionPage();
  renderLandingPage();
};


finalPage();
