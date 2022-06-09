import React, { Component } from "react";
import './../public/assets/css/quizlib.min.css';
import './../public/assets/css/stylesheet.css';
import InnerHTML from 'dangerously-set-html-content'

class Soal extends Component {

  render() {
    const html = `

 <!DOCTYPE html>
 <html>
     <head>
         <meta charset='utf-8'>
         <script type="text/javascript" src="scripts/quizlib.1.0.1.min.js"></script>
         <script type="text/javascript" src="scripts/main.js"></script>
     </head>

     <body>
         <!-- Quiz Results -->
         <!-- For this multi quiz, we'll use the same result element and move it to active quiz when the answer button is pressed. -->
         <div id="quiz-result" class="card">
             You Scored <span id="quiz-percent"></span>% - <span id="quiz-score"></span>/<span id="quiz-max-score"></span><br/>
         </div>

         <!-- Quiz 1 -->
         <div id="quiz-1">
             <h2>Quiz 1</h2>
             <!-- Question 1 -->
             <div class="card quizlib-question">
                 <div class="quizlib-question-title">1. What is the answer to life, the universe and everything?</div>
                 <div class="quizlib-question-answers">
                     <input type="text" name="q1">
                 </div>
             </div>
             <!-- Question 2 -->
             <div class="card quizlib-question">
                 <div class="quizlib-question-title">2. Your enemy's father...</div>
                 <div class="quizlib-question-answers">
                     <ul>
                         <li><label><input type="radio" name="q2" value="a" style="display:inline"> is a hamster</label></li>
                         <li><label><input type="radio" name="q2" value="b" style="display:inline"> smells of elderberries</label></li>
                     </ul>
                 </div>
             </div>
             <!-- Question 3 -->
             <div class="card quizlib-question">
                 <div class="quizlib-question-title">3. Which factors will contribute to the end of humanity as we know it?</div>
                 <div class="quizlib-question-answers">
                     <ul>
                         <li><label><input type="checkbox" name="q3" value="a"> Global warming</label></li>
                         <li><label><input type="checkbox" name="q3" value="b"> The release of Linux 4.1.15</label></li>
                         <li><label><input type="checkbox" name="q3" value="c"> Cats</label></li>
                         <li><label><input type="checkbox" name="q3" value="d"> Advancements in artificial intelligence</label></li>
                     </ul>
                 </div>
             </div>
             <!-- Answer Button. Here, we pass the ID of the quiz element (the parent of this button) to the showResults function.  -->
             <button type="button" onclick="showResults(this.parentNode.id);">Check Answers</button>
         </div>
     </body>
 </html>

   `
    return(
      <>
        <InnerHTML html={html} />
      </>
    )
  }
}

export default Soal;
