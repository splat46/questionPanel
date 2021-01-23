class Tabs {
  constructor() {
    this.question = false;
    this.tab();
  }

  updateTabs(question) {
    this.question = question;
    this.tab();
  }

  displayCurrentTab(current) {
    let tabPanel = document.querySelectorAll("#tab");

    for (let i = 0; i < tabPanel.length; i++) {
      tabPanel[i].style.display = current === i ? "block" : "none";
    }
  }

  tab() {
    this.displayCurrentTab(0);

    console.log(this.displayCurrentTab);

    //console.log(tabPanel[0]);
  }
}
