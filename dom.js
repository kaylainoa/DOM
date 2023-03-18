const main = document.querySelector('main');

const joke1 = "Why don't scientists trust atoms? Because they make up everything.";
const joke2 = "Why was Cinderella so bad at soccer? She kept running away from the ball!";
const joke3 = "Why did the tomato turn red? Because it saw the salad dressing.";

const jokesTemplate = `
  <h1>My Jokes</h1>
  <ul>
    <li>${joke1}</li>
    <li>${joke2}</li>
    <li>${joke3}</li>
  </ul>
`;

main.innerHTML = jokesTemplate;

const paragraph = document.createElement('p');
paragraph.textContent = "That's all folks!";
document.body.appendChild(paragraph);
