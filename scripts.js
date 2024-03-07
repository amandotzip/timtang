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
    alert(page)
    alert(answer)
    switch (page) {
        case 'level1':
            expectedAnswer = 'ohhimark';
            nextLevel = 'level2/ohhimark.html?level=level2';
            break;
        case 'level2':
            expectedAnswer = 'drinkup';
            nextLevel = 'level3/drinkup.html?level=level3';
            break;
        case 'level3':
            expectedAnswer = 'bergamot';
            nextLevel = 'level4/bergamot.html?level=level4';
            break;
        case 'level4':
            expectedAnswer = 'reeldeal';
            nextLevel = 'level5/reeldeal.html?level=level5';
            break;
        case 'level5':
            expectedAnswer = 'friday';
            nextLevel = 'level6/friday.html?level=level6';
            break;
        case 'level6':
            expectedAnswer = 'liveandletdie';
            nextLevel = 'level7/liveandletdie.html?level=level7';
            break;
        case 'level7':
            if(answer == 'vagabond'){
                expectedAnswer = 'vagabond';
                nextLevel = 'level7/vagabond.html';
            }
            else if(answer == 'vaga'){
                expectedAnswer = 'vaga';
                nextLevel = 'level8/vaga.html?level=level8';
            }
            break;
        case 'level8':
            if(answer == 'shoebox'){
                expectedAnswer = 'shoebox';
                nextLevel = 'level8/shoebox.html';
            }
            else if(answer == 'thisiswhereitends'){
                expectedAnswer = 'thisiswhereitends';
                nextLevel = 'levelend/thisiswhereitends.html';
            }
            break;
        
        // Add more cases as needed
        default:
            expectedAnswer = ''; // Default answer
    }
    
    // Check if the answer is correct
    if (answer === expectedAnswer) {
        window.location.href = "../" + nextLevel; // Redirect to the next page if the answer is correct
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