const hi = document.querySelector(".hi")
const btn = document.querySelector(".btn")
const btn2 = document.querySelector(".btn-2")
const music = document.querySelector(".music")
const container1 = document.querySelector(".container-1")
const backBtn = document.querySelector(".backBtn")
const happy = document.querySelector(".happy")
const moody = document.querySelector(".moody")
const sad = document.querySelector(".sad")
const sticker1 = document.querySelector(".sticker-1")
const sticker2 = document.querySelector(".sticker-2")
const sticker3 = document.querySelector(".sticker-3")

let timeoutid = null;
let isdisplay = true;

const hello = [
    { word: '...', delay: 5000 },
    { word: 'This', delay: 230 },
    { word: 'is', delay: 700 },
    { word: 'the', delay: 230 },
    { word: 'day,', delay: 1200 },
    { word: 'This', delay: 250 },
    { word: 'is', delay: 500 },
    { word: 'the', delay: 230 },
    { word: 'day,', delay: 700 },
    { word: 'That', delay: 200 },
    { word: 'the', delay: 400 },
    { word: 'Lord', delay: 500 },
    { word: 'has', delay: 600 },
    { word: 'made,', delay: 500 },
    { word: 'That', delay: 300 },
    { word: 'the', delay: 400 },
    { word: 'Lord', delay: 500 },
    { word: 'has', delay: 600 },
    { word: 'made,', delay: 1000 },
    { word: 'We', delay: 300 },
    { word: 'will', delay: 600 },
    { word: 'rejoice,', delay: 1400 },
    { word: 'We', delay: 300 },
    { word: 'will', delay: 600 },
    { word: 'rejoice,', delay: 800 },
    { word: 'And', delay: 200 },
    { word: 'be', delay: 500 },
    { word: 'glad', delay: 450 },
    { word: 'in', delay: 500 },
    { word: 'it,', delay: 700 },
    { word: 'And', delay: 200 },
    { word: 'be', delay: 400 },
    { word: 'glad', delay: 450 },
    { word: 'in', delay: 500 },
    { word: 'it,', delay: 500 },
    { word: '...', delay: 500 },
    { word: 'This', delay: 230 },
    { word: 'is', delay: 800 },
    { word: 'the', delay: 230 },
    { word: 'day,', delay: 500 },
    { word: 'That', delay: 200 },
    { word: 'the', delay: 400 },
    { word: 'Lord', delay: 500 },
    { word: 'has', delay: 600 },
    { word: 'made,', delay: 1100 },
    { word: 'We', delay: 300 },
    { word: 'will', delay: 600 },
    { word: 'rejoice', delay: 1000 },
    { word: 'And', delay: 200 },
    { word: 'be', delay: 400 },
    { word: 'glad', delay: 450 },
    { word: 'in', delay: 500 },
    { word: 'it,', delay: 1100 },
    { word: 'This', delay: 230 },
    { word: 'is', delay: 700 },
    { word: 'the', delay: 230 },
    { word: 'day,', delay: 1200 },
    { word: 'This', delay: 230 },
    { word: 'is', delay: 700 },
    { word: 'the', delay: 230 },
    { word: 'day,', delay: 700 },
    { word: 'That', delay: 150 },
    { word: 'the', delay: 400 },
    { word: 'Lord', delay: 1000 },
    { word: 'has', delay: 1000 },
    { word: 'made...', delay: 900 },
]
function clearlyrics() {
    hi.innerHTML = '';
}

function display(index) {
    if (index < hello.length && isdisplay) {
        const wordspan = document.createElement('span')
        wordspan.textContent = hello[index].word + " ";
        wordspan.classList.add('fad-in');
        hi.appendChild(wordspan);

        setTimeout(() => {
            wordspan.classList.add("show");
        }, 1000)
        timeoutid = setTimeout(() =>
            display(index + 1), hello[index].delay);
    } else if (index >= hello.length) {
        btn.disable = false;
        btn2.disable = true;
        music.pause()
    }
}

btn.addEventListener('click', () => {
    clearlyrics()
    isdisplay = true;
    btn.disable = false;
    btn2.disable = true;
    display(0)
    hi.style.display = 'block';
    btn.style.display = 'none';
    setTimeout(() => {
        btn2.style.display = 'flex';
    }, 40000);
    if (music.paused) {
        music.currentTime = 0;
        music.play();
    }
})
btn2.addEventListener('click', () => {
    if (music.play) {
        music.pause();
    }
    clearlyrics();
    clearTimeout(timeoutid)
    btn.disable = false;
    btn2.disable = true;
    btn2.style.display = 'none';
    container1.style.display = 'flex';
    hi.style.display = 'none';
    backBtn.style.display = 'block';
})
backBtn.addEventListener('click', () => {
    container1.style.display = 'none'
    sticker1.style.display = "none";
    sticker2.style.display = "none";
    sticker3.style.display = "none";
    backBtn.style.display = "none";
    btn.style.display = "flex"
})
happy.addEventListener('click', () => {
    container1.style.display = 'none';
    sticker1.style.display = "flex";
})
moody.addEventListener('click', () => {
    container1.style.display = 'none';
    sticker2.style.display = "flex";
})
sad.addEventListener('click', () => {
    container1.style.display = 'none';
    sticker3.style.display = "flex";
})