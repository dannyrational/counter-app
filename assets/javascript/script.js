const count = document.querySelector('.count');
const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (e) => {
    if (e.target.classList.contains('add')) {
        count.innerHTML++;
        colorSet();
    };
    if (e.target.classList.contains('reset')) {
        count.innerHTML = 0;
        colorSet();
    };
    if (e.target.classList.contains('subtract')) {
        count.innerHTML--;
        colorSet();
    };
});

function colorSet() {
    if (count.innerHTML > 0) {
        count.classList.remove('text-white');
        count.classList.remove('text-red-500');
        count.classList.add('text-green-400');
    } else if (count.innerHTML < 0) {
        count.classList.remove('text-white');
        count.classList.remove('text-green-400');
        count.classList.add('text-red-500');
    } else {
        count.classList.remove('text-green-400');
        count.classList.remove('text-red-500');
        count.classList.add('text-white');
    };
};