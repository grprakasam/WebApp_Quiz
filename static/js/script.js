function addNumbers() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    
    fetch('/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({num1: num1, num2: num2})
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerHTML = `<h2>Hi- This is the result</h2><p>The sum of ${num1} and ${num2} is: ${data.result}</p>`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
