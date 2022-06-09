/**
 * QuizLib version 1.0.1
 * by Andy Palmer
 * https://alpsquid.github.io/quizlib
 */

/**
 * Class that represents an HTML Quiz. Provides methods for checking answers, generating a score and providing visual feedback.
 *
 * See https://alpsquid.github.io/quizlib for usage
 *
 * @class Quiz
 * @constructor
 * @param {String} quizContainer ID of the quiz container element.
 * @param {Array} answers Array of correct answers using the input value. e.g. ['a', '7', ['a', 'b']].
 *        Can use nested arrays for multi-answers such as checkbox questions
 * @example
 * 		new Quiz('quiz-div', ['a', '7', ['c', 'd'], 'squids', ['a', 'b']]);
 */
var Quiz = function(quizContainer, answers) {
	/**
	 * Enum containing classes used by QuizLib as follows:
	 * - **QUESTION**: 'quizlib-question'
	 *   - used to identify a question element
	 * - **QUESTION_TITLE**: 'quizlib-question-title'
	 *   - used to identify the question title element
	 * - **QUESTION_WARNING**: 'quizlib-question-answers'
	 *   - used to identify the element containing question answers
	 * - **QUESTION_ANSWERS**: 'quizlib-question-warning'
	 *   - used by the 'unanswered question warning' element. Removed by {{#crossLink "Quiz/clearHighlights:method"}}{{/crossLink}}
	 * - **CORRECT**: 'quizlib-correct'
	 *   - added to question titles to highlight correctly answered questions.
	 *     Use freely to take advantage of {{#crossLink "Quiz/highlightResults:method"}}{{/crossLink}} and {{#crossLink "Quiz/clearHighlights:method"}}{{/crossLink}}
	 * - **INCORRECT**: 'quizlib-incorrect'
	 *   - added to question titles to highlight incorrectly answered questions.
	 *     Use freely to take advantage of {{#crossLink "Quiz/highlightResults:method"}}{{/crossLink}} and {{#crossLink "Quiz/clearHighlights:method"}}{{/crossLink}}
	 * - **TEMP**: 'quizlib-temp'
	 *   - Add to any elements you want to be removed by {{#crossLink "Quiz/clearHighlights:method"}}{{/crossLink}} (called by {{#crossLink "Quiz/checkAnswers:method"}}{{/crossLink}}).
	 *     For example, adding an element with the correct answer in your {{#crossLink "Quiz/clearHighlights:method"}}{{/crossLink}} callback and have it be removed automatically
	 *
	 * @property Classes
	 * @type Object
	 * @default See above
	 * @final
	 * @deprecated Since version 1.0.1, Classes should be accessed through the static context (Quiz.Classes)
	 */
	this.Classes = Object.freeze({
		QUESTION: "quizlib-question",
		QUESTION_TITLE: "quizlib-question-title",
		QUESTION_ANSWERS: "quizlib-question-answers",
		QUESTION_WARNING: "quizlib-question-warning",
		CORRECT: "quizlib-correct",
		INCORRECT: "quizlib-incorrect",
		TEMP: "quizlib-temp"
	});

	/**
	 * Warning displayed on unanswered questions
	 *
	 * @property unansweredQuestionText
	 * @type String
	 * @default 'Unanswered Question!'
	 */
	this.unansweredQuestionText = 'Unanswered Question!';

	// Quiz container element
	this.container = document.getElementById(quizContainer);
	this.questions = [];
	/**
	 * Quiz Result object containing quiz score information. See {{#crossLink "QuizResult"}}{{/crossLink}}
	 *
	 * @property result
	 * @type QuizResult
	 */
	this.result = new QuizResult();
	/**
	 * User defined answers taken from constructor
	 *
	 * @property answers
	 * @type Array
	 */
	this.answers = answers;

	// Get all the questions and add element to the questions array
	for (var i=0; i < this.container.children.length; i++) {
		if (this.container.children[i].classList.contains(Quiz.Classes.QUESTION)) {
			this.questions.push(this.container.children[i]);
		}
	}

	if (this.answers.length != this.questions.length) {
		throw new Error("Number of answers does not match number of questions!");
	}
};

/**
 * Enum containing classes used by QuizLib as follows:
 * - **QUESTION**: 'quizlib-question'
 *   - used to identify a question element
 * - **QUESTION_TITLE**: 'quizlib-question-title'
 *   - used to identify the question title element
 * - **QUESTION_WARNING**: 'quizlib-question-answers'
 *   - used to identify the element containing question answers
 * - **QUESTION_ANSWERS**: 'quizlib-question-warning'
 *   - used by the 'unanswered question warning' element. Removed by {{#crossLink "Quiz/clearHighlights:method"}}{{/crossLink}}
 * - **CORRECT**: 'quizlib-correct'
 *   - added to question titles to highlight correctly answered questions.
 *     Use freely to take advantage of {{#crossLink "Quiz/highlightResults:method"}}{{/crossLink}} and {{#crossLink "Quiz/clearHighlights:method"}}{{/crossLink}}
 * - **INCORRECT**: 'quizlib-incorrect'
 *   - added to question titles to highlight incorrectly answered questions.
 *     Use freely to take advantage of {{#crossLink "Quiz/highlightResults:method"}}{{/crossLink}} and {{#crossLink "Quiz/clearHighlights:method"}}{{/crossLink}}
 * - **TEMP**: 'quizlib-temp'
 *   - Add to any elements you want to be removed by {{#crossLink "Quiz/clearHighlights:method"}}{{/crossLink}} (called by {{#crossLink "Quiz/checkAnswers:method"}}{{/crossLink}}).
 *     For example, adding an element with the correct answer in your {{#crossLink "Quiz/clearHighlights:method"}}{{/crossLink}} callback and have it be removed automatically
 *
 * @property Classes
 * @type Object
 * @default See above
 * @final
 */
Quiz.Classes = Object.freeze({
    QUESTION: "quizlib-question",
    QUESTION_TITLE: "quizlib-question-title",
    QUESTION_ANSWERS: "quizlib-question-answers",
    QUESTION_WARNING: "quizlib-question-warning",
    CORRECT: "quizlib-correct",
    INCORRECT: "quizlib-incorrect",
    TEMP: "quizlib-temp"
});

/**
 * Checks quiz answers against provided answers. Calls {{#crossLink "Quiz/clearHighlights:method"}}{{/crossLink}} for each question.
 *
 * @method checkAnswers
 * @param {Boolean} [flagUnanswered=true] Whether to ignore unanswered questions. If false, unanswered questions will not be flagged
 * @return {Boolean} True or if *flagUnanswered* is true: True if all questions have been answered. Otherwise false and unanswered questions are highlighted.
 */
Quiz.prototype.checkAnswers = function(flagUnanswered) {
	if (flagUnanswered === undefined) flagUnanswered = true;
	var unansweredQs = [];
	var questionResults = [];
	for (var i=0; i < this.questions.length; i++) {
		var question = this.questions[i];
		var answer = this.answers[i];
		var userAnswer = [];

		this.clearHighlights(question);

		// Get answers
		var answerInputs = question.getElementsByClassName(Quiz.Classes.QUESTION_ANSWERS)[0].getElementsByTagName('input');
		var input;
		for (var k=0; k < answerInputs.length; k++) {
			input = answerInputs[k];
			if (input.type === "checkbox" || input.type === "radio") {
				 if (input.checked) userAnswer.push(input.value);
			} else if (input.value !== '') {
				userAnswer.push(input.value);
			}
		}
		// Remove single answer from array to match provided answer format
		if (userAnswer.length == 1 && !Array.isArray(answer)) {
			userAnswer = userAnswer[0];
		} else if (userAnswer.length === 0) {
			unansweredQs.push(question);
		}

		questionResults.push(Utils.compare(userAnswer, answer));
	}

	if (unansweredQs.length === 0 || !flagUnanswered) {
		this.result.setResults(questionResults);
		return true;
	}
	else {
		// Highlight unanswered questions if set
		for (i=0; i < unansweredQs.length; i++) {
			var warning = document.createElement('span');
			warning.appendChild(document.createTextNode(this.unansweredQuestionText));
			warning.className = Quiz.Classes.QUESTION_WARNING;
			unansweredQs[i].getElementsByClassName(Quiz.Classes.QUESTION_TITLE)[0].appendChild(warning);
		}
	}
	return false;
};

/**
 * Clears highlighting for a question element (correct and incorrect classes), including unanswered question warnings and elements using the Classes.TEMP class
 *
 * @method clearHighlights
 * @param {HTMLDocument} question Question element to clear
 */
Quiz.prototype.clearHighlights = function(question) {
	// Remove question warning if it exists
	var questionWarnings = question.getElementsByClassName(Quiz.Classes.QUESTION_WARNING);
	while (questionWarnings.length > 0) {
		questionWarnings[0].parentNode.removeChild(questionWarnings[0]);
	}

	// Remove highlighted elements
	var highlightedQuestions = [question.getElementsByClassName(Quiz.Classes.CORRECT), question.getElementsByClassName(this.Classes.INCORRECT)];
	var highlightedElement;
	for (i=0; i < highlightedQuestions.length; i++) {
		while (highlightedQuestions[i].length > 0) {
			highlightedElement = highlightedQuestions[i][0];
			highlightedElement.classList.remove(Quiz.Classes.CORRECT);
			highlightedElement.classList.remove(Quiz.Classes.INCORRECT);
		}
	}

	// Remove temp elements
	var tempElements = question.getElementsByClassName(Quiz.Classes.TEMP);
	while (tempElements.length > 0) {
		tempElements[0].parentNode.removeChild(tempElements[0]);
	}
};

/**
 * Highlights correctly and incorrectly answered questions by:
 * - Adding the class 'quizlib-correct' to correctly answered question titles
 * - Adding the class 'quizlib-incorrect' to incorrectly answered question titles
 *
 * @method highlightResults
 * @param {Function} [questionCallback] Optional callback for each question with the following arguments:
 * 1. Quiz: the quiz object
 * 2. Element: the question element
 * 3. Number: question number
 * 4. Boolean: true if correct, false if incorrect.
 *
 * This allows you to further customise the handling of answered questions (and decouples the library from a specific HTML structure), for example highlighting the correct answer(s) on incorrect questions.
 * Use the Classes.TEMP ('quizlib-temp') class on added elements that you want removing when {{#crossLink "Quiz/checkAnswers:method"}}{{/crossLink}} is called
 *
 * @example
 * ```
 *    // Method Call
 *    quiz.highlightResults(handleAnswers);
 *
 *    // handleAnswers callback
 *    function handleAnswers(quizObject, questionElement, questionNo, correctFlag) {
 *        ...
 *    }
 * ```
 */
Quiz.prototype.highlightResults = function(questionCallback) {
	var question;
	for (var i=0; i < this.questions.length; i++) {
		question = this.questions[i];
		if (this.result.results[i]) {
			question.getElementsByClassName(Quiz.Classes.QUESTION_TITLE)[0].classList.add(Quiz.Classes.CORRECT);
		}
		else {
			question.getElementsByClassName(Quiz.Classes.QUESTION_TITLE)[0].classList.add(Quiz.Classes.INCORRECT);
		}
		if (questionCallback !== undefined) questionCallback(this, question, i, this.result.results[i]);
	}
};


/**
 * Quiz Result class that holds score information
 *
 * @class QuizResult
 * @constructor
 */
var QuizResult = function() {
	/**
	 * Array of booleans where the index is the question number and the value is whether the question was answered correctly. Updated by {{#crossLink "QuizResult/setResults:method"}}{{/crossLink}}
	 * @property results
	 * @type Array
	 */
	this.results = [];
	/**
	 * Total number of questions. Updated by {{#crossLink "QuizResult/setResults:method"}}{{/crossLink}}
	 * @property totalQuestions
	 * @type Number
	 */
	this.totalQuestions = 0;
	/**
	 * Number of questions answered correctly. Updated by {{#crossLink "QuizResult/setResults:method"}}{{/crossLink}}
	 * @property score
	 * @type Number
	 */
	this.score = 0;
	/**
	 * Percentage score between 0 and 1. Updated by {{#crossLink "QuizResult/setResults:method"}}{{/crossLink}}
	 * @property scorePercent
	 * @type Number
	 */
	this.scorePercent = 0;
	/**
	 * Formatted score percent that's more useful to humans (1 - 100). Percent is rounded down. Updated by {{#crossLink "QuizResult/setResults:method"}}{{/crossLink}}
	 * @property scorePercentFormatted
	 * @type Number
	 */
	this.scorePercentFormatted = 0;
};

/**
 * Calculates score information from an array of question results and updates properties
 *
 * @method setResults
 * @param {Array} questionResults Array of question results where the index is the question number and the value is whether the question was answered correctly. e.g. [true, true, false]
 */
QuizResult.prototype.setResults = function(questionResults) {
	this.results = questionResults;
	this.totalQuestions = this.results.length;
	this.score = 0;
	for (var i=0; i < this.results.length; i++) {
		if (this.results[i]) this.score++;
	}
	this.scorePercent = this.score / this.totalQuestions;
	this.scorePercentFormatted = Math.floor(this.scorePercent * 100);
};


/**
 * Utils class that provides useful methods
 *
 * @class Utils
 */
var Utils = function() {};
/**
 * Compare two objects without coercion. If objects are arrays, their contents will be compared, including order.
 *
 * @method compare
 * @param {Object} obj1 main object
 * @param {Object} obj2 object to compare obj1 against
 * @return {boolean} True if objects are equal
 */
Utils.compare = function(obj1, obj2) {
	if (obj1.length != obj2.length) return false;

	if (Array.isArray(obj1) && Array.isArray(obj2)) {
		for (var i=0; i < obj1.length; i++) {
			if (obj1[i] !== obj2[i]) return false;
		}
		return true;
	}
	return obj1 === obj2;
};

/**
* Try this example at https://alpsquid.github.io/quizlib
*/

/** Key value pairs using quiz element IDs and Quiz Objects.
 * For example: quizzes['quiz-1'] = [Quiz Object]
 */
var quizzes = {};

/**
 * Callback for answer buttons. The implementation for this will vary depending on your requirements.
 * In this example, the same function is being used for every quiz so we pass the ID of the quiz element and
 * retrieve the respective quiz instance from the quiz map we created in the window.onload function.
 */
function showResults(quizID) {
  console.log("a");
    // Retrieve the quiz instance for this quiz element from the map.
    var activeQuiz = quizzes['quiz-1'];
    // Check answers and continue if all questions have been answered
    if (activeQuiz.checkAnswers()) {
        var quizScorePercent = activeQuiz.result.scorePercentFormatted; // The unformatted percentage is a decimal in range 0 - 1
        var quizResultElement = document.getElementById('quiz-result');
        // Move the quiz result element to the active quiz, placing it after the quiz title.
        var quizElement = document.getElementById('quiz-1');
        quizElement.insertBefore(quizResultElement, quizElement.children[1]);

        // Show the result element and add result values.
        quizResultElement.style.display = 'block';
        document.getElementById('quiz-score').innerHTML = activeQuiz.result.score.toString();
        document.getElementById('quiz-max-score').innerHTML = activeQuiz.result.totalQuestions.toString();
        document.getElementById('quiz-percent').innerHTML = quizScorePercent.toString();

        // Change background colour of results div according to score percent
        if (quizScorePercent >= 75) quizResultElement.style.backgroundColor = '#4caf50';
        else if (quizScorePercent >= 50) quizResultElement.style.backgroundColor = '#ffc107';
        else if (quizScorePercent >= 25) quizResultElement.style.backgroundColor = '#ff9800';
        else if (quizScorePercent >= 0) quizResultElement.style.backgroundColor = '#f44336';

        // Highlight questions according to whether they were correctly answered. The callback allows us to highlight/show the correct answer
        activeQuiz.highlightResults(handleAnswers);
    }
}

/** Callback for Quiz.highlightResults. Highlights the correct answers of incorrectly answered questions
 * Parameters are: the quiz object, the question element, question number, correctly answered flag
 */
function handleAnswers(quiz, question, no, correct) {
    if (!correct) {
        var answers = question.getElementsByTagName('input');
        for (var i = 0; i < answers.length; i++) {
            if (answers[i].type === "checkbox" || answers[i].type === "radio"){
                // If the current input element is part of the correct answer, highlight it
                if (quiz.answers[no].indexOf(answers[i].value) > -1) {
                    answers[i].parentNode.classList.add(Quiz.Classes.CORRECT);
                }
            } else {
                // If the input is anything other than a checkbox or radio button, show the correct answer next to the element
                var correctAnswer = document.createElement('span');
                correctAnswer.classList.add(Quiz.Classes.CORRECT);
                correctAnswer.classList.add(Quiz.Classes.TEMP); // quiz.checkAnswers will automatically remove elements with the temp class
                correctAnswer.innerHTML = quiz.answers[no];
                correctAnswer.style.marginLeft = '10px';
                answers[i].parentNode.insertBefore(correctAnswer, answers[i].nextSibling);
            }
        }
    }
}

window.onload = function() {
    // Create quiz instances for each quiz and add them to the quizzes map.
    // The key is the ID of the quiz element, same as what we pass to the Quiz object as the first argument.
    quizzes['quiz-1'] = new Quiz('quiz-1', [
        '42',
        'b',
        ['b', 'c', 'd']
    ]);
};
