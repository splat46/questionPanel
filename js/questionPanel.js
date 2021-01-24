class QuestionPanel {
  constructor(targetClass) {
    this.panels = document.querySelectorAll(targetClass);
    this.questions = this.panels.length;
    this.currentQuestion = 1;
    this.answers = [];
    this.showCurrentQuestion();
  }

  showCurrentQuestion() {
    for (let i = 1; i <= this.questions; i++) {
      this.panels[i - 1].style.display =
        this.currentQuestion === i ? "block" : "none";
    }
  }

  goToPreviousQuestion() {
    if (this.currentQuestion > 1) {
      this.currentQuestion -= 1;
      console.log("Current question:", this.currentQuestion);
    }
  }

  goToNextQuestion() {
    if (this.currentQuestion < this.questions) {
      this.currentQuestion += 1;
      console.log("Current question:", this.currentQuestion);
    }
  }

  goToQuestion(index) {
    if (index > 0 && index <= this.questions) {
      this.currentQuestion = index;
      console.log("Current question:", index);
    }
  }

  storeAnswer(index, answer) {
    if (index > 0 && index <= this.questions) {
      this.answers[index] = answer;
      console.log("Answer to question", index, ":", answer);
    }
  }
}
