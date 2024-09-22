class Question {
    constructor(text, choices, correctAnswer) {
        this.text = text;
        this.choices = choices;
        this.correctAnswer = correctAnswer;
    }

    isCorrectAnswer(choice) {
        return this.correctAnswer === choice;
    }
}

class Quiz {
    constructor(questions) {
        this.questions = questions;
        this.currentQuestionIndex = 0;
        this.score = 0;
    }

    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }

    guess(answer) {
        if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.currentQuestionIndex++;
    }

    hasEnded() {
        return this.currentQuestionIndex >= this.questions.length;
    }

    goToPreviousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
        }
    }
}

class QuizUI {
    static displayNext() {
        if (quiz.hasEnded()) {
            this.showScores();
        } else {
            this.showQuestion();
            this.showChoices();
            this.showProgress();
            this.showButtons();
        }
    }

    static showQuestion() {
        const question = quiz.getCurrentQuestion();
        const questionElement = document.getElementById('question');
        questionElement.innerHTML = question.text;
    }

    static showChoices() {
        const choices = quiz.getCurrentQuestion().choices;
        const choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML = '';

        for (let i = 0; i < choices.length; i++) {
            const choice = choices[i];
            const button = document.createElement('button');
            button.innerHTML = choice;
            button.className = 'choice';
            button.onclick = () => {
                quiz.guess(choice);
                QuizUI.displayNext();
            };
            choicesContainer.append(button);
        }
    }

    static showProgress() {
        const currentQuestionNumber = quiz.currentQuestionIndex + 1;
        const progressElement = document.getElementById('progress');
        progressElement.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
    }

    static showButtons() {
        const buttonGroup = document.getElementById('button-group');
        buttonGroup.innerHTML = '';

        if (quiz.currentQuestionIndex > 0) {
            const prevButton = document.createElement('button');
            prevButton.innerHTML = 'Previous Question';
            prevButton.onclick = () => {
                quiz.goToPreviousQuestion();
                QuizUI.displayNext();
            };
            buttonGroup.append(prevButton);
        }

        if (quiz.currentQuestionIndex < quiz.questions.length - 1) {
            const nextButton = document.createElement('button');
            nextButton.innerHTML = 'Next Question';
            nextButton.onclick = () => {
                QuizUI.displayNext();
            };
            buttonGroup.append(nextButton);
        } else {
            const submitButton = document.createElement('button');
            submitButton.innerHTML = 'Submit Quiz';
            submitButton.onclick = () => {
                QuizUI.showScores();
            };
            buttonGroup.append(submitButton);
        }
    }

    static showScores() {
        const quizElement = document.getElementById('quiz');
        quizElement.innerHTML = `<h1>Result</h1><h2>Your score: ${quiz.score}</h2>`;
    }
}

const questions = [
    new Question(
        'Javascript is _________ language.',
        ['Programming', 'Application', 'None of These', 'Scripting'],
        'Scripting'
    ),
    new Question(
        'Which of the following is a valid type of function javascript supports?',
        ['named function', 'anonymous function', 'both of the above', 'none of the above'],
        'both of the above'
    ),
    new Question(
        'Which built-in method returns the index within the calling String object of the first occurrence of the specified value?',
        ['getIndex()', 'location()', 'indexOf()', 'getLocation()'],
        'indexOf()'
    ),
    new Question(
        'Which one of the following is valid data type of JavaScript',
        ['number', 'void', 'boolean', 'nothing'],
        'boolean'
    )
];

const quiz = new Quiz(questions);

QuizUI.displayNext();

