let score = 0;  // Initializes the score

function updateFizzBuzz() {
    score++;
    let result = '';
    if (score % 3 === 0) { result += 'Fizz'; }
    if (score % 5 === 0) { result += 'Buzz'; }
    if (result === '') { result = score; }
    
    document.getElementById('output').innerText = result;
}

function fetchScore() {
    const username = localStorage.getItem('username');
    fetch(`api_url/score/${username}`)  // Replace `api_url` with the actual API URL
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').innerText = data.score;
            score = data.score;  // Update score from API
        })
        .catch(error => console.error('Error:', error));
}

function updateScore() {
    const username = localStorage.getItem('username');
    fetch(`api_url/score/${username}`, {  // Replace `api_url` with the actual API URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ score: score })
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));
}
