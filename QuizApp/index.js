const questions = [
    { title: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], CorrectAnswerIndex: 2 },
    { title: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], CorrectAnswerIndex: 1 },
    { title: "Who developed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"], CorrectAnswerIndex: 1 },
    { title: "What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], CorrectAnswerIndex: 3 },
    { title: "Which element has the chemical symbol O?", options: ["Oxygen", "Gold", "Osmium", "Ozone"], CorrectAnswerIndex: 0 },
    { title: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "Korea", "Thailand"], CorrectAnswerIndex: 1 },
    { title: "What is the hardest natural substance on Earth?", options: ["Gold", "Diamond", "Platinum", "Iron"], CorrectAnswerIndex: 1 },
    { title: "Who wrote 'Romeo and Juliet'?", options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"], CorrectAnswerIndex: 0 },
    { title: "What is the smallest prime number?", options: ["1", "2", "3", "5"], CorrectAnswerIndex: 1 },
    { title: "What is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], CorrectAnswerIndex: 2 },
    { title: "Which gas do plants absorb for photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], CorrectAnswerIndex: 1 },
    { title: "What is the currency of Japan?", options: ["Yuan", "Won", "Yen", "Ringgit"], CorrectAnswerIndex: 2 },
    { title: "In which year did the Titanic sink?", options: ["1910", "1911", "1912", "1913"], CorrectAnswerIndex: 2 },
    { title: "What is the largest continent?", options: ["Africa", "Asia", "Europe", "Australia"], CorrectAnswerIndex: 1 },
    { title: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], CorrectAnswerIndex: 2 },
    { title: "What is the longest river in the world?", options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"], CorrectAnswerIndex: 1 },
    { title: "Who invented the telephone?", options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Michael Faraday"], CorrectAnswerIndex: 2 },
    { title: "What is the tallest mountain in the world?", options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"], CorrectAnswerIndex: 1 },
    { title: "What is the main ingredient in guacamole?", options: ["Tomato", "Avocado", "Onion", "Garlic"], CorrectAnswerIndex: 1 },
    { title: "Which company developed the iPhone?", options: ["Samsung", "Google", "Apple", "Microsoft"], CorrectAnswerIndex: 2 },
    { title: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "400,000 km/s", "500,000 km/s"], CorrectAnswerIndex: 0 }
];

let currentQuestionIndex = 0;
let score = 0;

const Play = () => { 
    let counter = 0;
    let quiz = document.getElementsByClassName("quiz")[0];
    let header = document.getElementById("quiz-title");
    let options = document.getElementsByClassName("options")[0];
    let nextButton = document.getElementById("NextQuestion");

    function loadQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        header.textContent = currentQuestion.title;
        options.innerHTML = ''; // Clear previous options

        currentQuestion.options.forEach((option, index) => {
            let opt = document.createElement("div");
            opt.className = "option";
            
            let p = document.createElement("p");
            p.className = "pOtion";
            p.textContent = option;
            
            opt.appendChild(p);
            opt.onclick = () => { 
                if (index === currentQuestion.CorrectAnswerIndex) {
                    opt.style.cssText = 'background-color: green; border: 2px solid green';
                    score++;
                } else {
                    opt.style.cssText = 'background-color: tomato; border: 2px solid red';
                }

                // Disable further clicks after answering
                Array.from(options.children).forEach(child => child.style.pointerEvents = 'none');
                nextButton.style.display = 'block'; // Show the "Next" button
            };

            options.appendChild(opt);
        });
    }

    nextButton.onclick = () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
            nextButton.style.display = 'none'; // Hide "Next" button until the next question
        } else {
            quiz.innerHTML = `<h2>Your score: ${score}/${questions.length}</h2>`;
        }
    };

    loadQuestion(); 
};

Play();
