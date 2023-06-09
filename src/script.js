const button = document.getElementById('adviceButton');
const advice = document.getElementById('advice');
const read = document.getElementById('read');
let count = 0;

const getAdvice = async () => {
    const data = await fetch('https://api.adviceslip.com/advice');
    const res = await data.json();
    advice.innerText = res.slip.advice;
    count = count + 1;
    read.innerText = count;
};

// on click, show new advice
button.addEventListener('click', getAdvice);
