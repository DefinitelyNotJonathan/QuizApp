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
      <button type="submit" name="button">Begin</button>
      `);
    $('form').unbind('submit');
    $('form').submit(function(e){
      e.preventDefault();
      renderQuestionPage();
    });
  }

  //Landing Page complete
  function renderQuestionPage() {
    $('form').html(`
      <fieldset class="questionfield">
        <legend class="question">${STORE[currentQuestionIndex].question}</legend>
        <br>
        <input type="radio" name="option" id="option-1" value="0" checked required>
        <label for="option-1">${STORE[currentQuestionIndex].options[0]}</label>
        <br>
        <br>
        <input type="radio" name="option" id="option-2" value="1" required>
        <label for="option-2">${STORE[currentQuestionIndex].options[1]}</label>
        <br>
        <br>
        <input type="radio" name="option" id="option-3" value="2" required>
        <label for="option-3">${STORE[currentQuestionIndex].options[2]}</label>
      </fieldset>
    <button type="submit" name="button">Submit</button>
    `);
    $('form').unbind('submit');
  //submit and answer check
    $('form').submit(function(e){
      e.preventDefault();
      $('button').text('Continue');

//my initial if statement isn't right. The correct value isn't being recognized

      if ($('input:checked').val()!==STORE[currentQuestionIndex].answer){
        let correction=STORE[currentQuestionIndex].answer
        $('legend').text("Incorrect, the answer was "+correction+".");
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
        }
      else {
        $('legend').text('CORRECT!');
        $('form').unbind('submit');
        $('form').submit(function(e){
          e.preventDefault();
          currentQuestionIndex++;
          if (currentQuestionIndex>=STORE.length) {
            renderResultsPage();
            }
          else {
            renderQuestionPage();
          }
          });
      }

      });
    }

      /*if ($('input:checked').val()===STORE[currentQuestionIndex].answer) {
        //change the css here for the correct/incorrect
        $('input:checked').css('font-weight', '900');
        currentQuestionIndex++;
        score++;
        renderQuestionPage();
        console.log('justmakingsurethisworks');
      });
  }*/



  function renderResultsPage() {
    $('form').html(`
      <fieldset class="resultsField">
        <legend class="finalResults">Results</legend>
          <div class="finalScore">${score}/5
          </div>
        </fieldset>
      <button type="submit" name="button">Restart Quiz</button>
    `);
    $('form').unbind('submit');
    $('form').submit(function(e) {
      renderLandingPage();
    });
  }


  function updateScore(){
    let score=0;
  }



  function updateProgress() {
    let progress=STORE[currentQuestionIndex]+1;
  }
  renderResultsPage();
  renderQuestionPage();
  renderLandingPage();

};


finalPage();
