const questions = [
  {
    id: 1,
    question: "Which of the following elements is a noble gas?",
    options: [
      { id: "1A", text: "A. Helium" },
      { id: "1B", text: "B. Oxygen" },
      { id: "1C", text: "C. Nitrogen" },
      { id: "1D", text: "D. Hydrogen" },
    ],
  },
  {
    id: 2,
    question: "What is the capital of France?",
    options: [
      { id: "2A", text: "A. Berlin" },
      { id: "2B", text: "B. London" },
      { id: "2C", text: "C. Paris" },
      { id: "2D", text: "D. Madrid" },
    ],
  },
  {
    id: 3,
    question: "What is the chemical symbol for water?",
    options: [
      { id: "3A", text: "A. CO2" },
      { id: "3B", text: "B. H2O" },
      { id: "3C", text: "C. O2" },
      { id: "3D", text: "D. NaCl" },
    ],
  },
  {
    id: 4,
    question: 'Who wrote "To Kill a Mockingbird"?',
    options: [
      { id: "4A", text: "A. Harper Lee" },
      { id: "4B", text: "B. Mark Twain" },
      { id: "4C", text: "C. J.K. Rowling" },
      { id: "4D", text: "D. Ernest Hemingway" },
    ],
  },
  {
    id: 5,
    question: "What is the largest planet in our solar system?",
    options: [
      { id: "5A", text: "A. Earth" },
      { id: "5B", text: "B. Jupiter" },
      { id: "5C", text: "C. Mars" },
      { id: "5D", text: "D. Saturn" },
    ],
  },
  {
    id: 6,
    question: "What is the boiling point of water?",
    options: [
      { id: "6A", text: "A. 0°C" },
      { id: "6B", text: "B. 50°C" },
      { id: "6C", text: "C. 100°C" },
      { id: "6D", text: "D. 200°C" },
    ],
  },
  {
    id: 7,
    question: "Who painted the Mona Lisa?",
    options: [
      { id: "7A", text: "A. Vincent van Gogh" },
      { id: "7B", text: "B. Pablo Picasso" },
      { id: "7C", text: "C. Leonardo da Vinci" },
      { id: "7D", text: "D. Claude Monet" },
    ],
  },
  {
    id: 8,
    question: "What is the powerhouse of the cell?",
    options: [
      { id: "8A", text: "A. Nucleus" },
      { id: "8B", text: "B. Mitochondria" },
      { id: "8C", text: "C. Ribosome" },
      { id: "8D", text: "D. Endoplasmic Reticulum" },
    ],
  },
  {
    id: 9,
    question: "Which planet is known as the Red Planet?",
    options: [
      { id: "9A", text: "A. Venus" },
      { id: "9B", text: "B. Mars" },
      { id: "9C", text: "C. Jupiter" },
      { id: "9D", text: "D. Saturn" },
    ],
  },
  {
    id: 10,
    question: "What is the speed of light?",
    options: [
      { id: "10A", text: "A. 300,000 km/s" },
      { id: "10B", text: "B. 150,000 km/s" },
      { id: "10C", text: "C. 100,000 km/s" },
      { id: "10D", text: "D. 50,000 km/s" },
    ],
  },
];

function startQuiz(questions) {
  // Hide the description section and show the quiz section
  $("#quiz_description").hide();
  $(".quiz_ui_attend_section").removeClass("hidden");

  // Initialize the quiz with the first question
  let currentQuestionIndex = 0;
  displayQuestion(questions, currentQuestionIndex);

  // Handle next and previous buttons
  $("#nextBtn").click(function () {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      displayQuestion(questions, currentQuestionIndex);
    }
  });

  $("#previousBtn").click(function () {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      displayQuestion(questions, currentQuestionIndex);
    }
  });
}

function displayQuestion(questions, index) {
  const question = questions[index];
  $("#question_text").text(question.text);
  $("#option_card_wraper").empty();

  // Display the options
  question.options.forEach((option, i) => {
    $("#option_card_wraper").append(`
          <div class="option_card">
              <div class="single_option">
                  <label class="option_label" style="cursor: pointer; display: block; padding: 10px; border-radius: 5px; width: 100%;">
                      <h1 class="option_title">${option}</h1>
                  </label>
              </div>
          </div>
      `);
  });
}
