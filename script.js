let interval;
let currentIndex = 0;
let signals = [];

const resetSignals = () =>{
    document.querySelectorAll('.signal').forEach(signal =>{
        signal.classList.remove('green','yellow');
        signal.classList.add('red');
    });
};

const startSequence = () => {
    const sequenceInput = document.getElementById('sequence').ariaValueMax.split(',');
    const greenInterval = parseInt(document.getElementById('greenInterval').value);
    const yellowInterval = parseInt(document.getElementById('yellowInterval').value);

    if(!sequenceInput || isNaN(greenInterval) || isNaN(yellowInterval)){
        alert('Invalid input');
            return;
        
    }

    signals = sequenceInput.map(id => document.getElementById('signal' + id.trim().toUpperCase()));
    currentIndex = 0;
    resetSignals();
    changeSignal();

    const totalInterval = (greenInterval + yellowInterval)*1000;
    interval = setInterval(changeSignal, totalInterval);
};
const changeSignal = () => {
    if(signals.length ===0) return;
    resetSignals();
    const currentSignal = signals[currentIndex];
    currentSignal.classList.remove('red');
    currentSignal.classList.add('green');
    setTimeout(() =>{
        currentSignal.classList.remove('green');
        currentSignal.classList.add('yellow');
    }, parseInt(document.getElementById('greenInterval').value)*1000);
    currentIndex = (currentIndex + 1) % signals.length;
};
const stopSequence = () =>{
    clearInterval(interval);
};
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start').addEventListener('click', startSequence);
    document.getElementById('stop').addEventListener('click', stopSequence);
});