document.getElementById("answerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get the input value
    var answer = document.getElementById("answerInput").value.trim().toLowerCase();
    
    // Get the page parameter from the URL
    var urlParams = new URLSearchParams(window.location.search);
    var page = urlParams.get('level');
    var nextLevel;
    
    // Check answer based on the page
    var expectedAnswer;
    switch (page) {
        case 'level1':
            expectedAnswer = 'answer1';
            nextLevel = 'level2/level2.html?level=level2';
            break;
        case 'level2':
            expectedAnswer = 'answer2';
            nextLevel = 'level3/level3.html?level=level3';
            break;
        case 'level3':
            expectedAnswer = 'answer3';
            nextLevel = 'level4/levelfinal.html?level=level4';
            break;
        // Add more cases as needed
        default:
            expectedAnswer = ''; // Default answer
    }
    
    // Check if the answer is correct
    if (answer === expectedAnswer) {
        window.location.href = "levels/" + nextLevel; // Redirect to the next page if the answer is correct
    } else {
        document.getElementById("errorMessage").style.display = "block"; // Display error message if the answer is incorrect
    }
});

var audio = document.getElementById("myAudio");

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}