var text = document.querySelectorAll(".text")[0];

var goTo = function() {text.setAttribute("href", "https://www.reddit.com");};

text.addEventListener('click', goTo);