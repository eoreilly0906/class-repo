import '.src/style.css';
import './src/script.js';
const badRequestUrl = 'https://api.github.com/unicorns';
const redirectUrl = './404.html';

// Use a conditional to check the response status.
// If that status equals the conditional, then redirect to the 404 page.
const getRequest = async () => {
  const response = await fetch(badRequestUrl);
  if (response.status === 404) {
    window.location.replace(redirectUrl);
  }
};

getRequest();