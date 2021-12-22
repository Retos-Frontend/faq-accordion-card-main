const question = [].slice.call(document.getElementsByClassName('container__question'));
const questions = [].slice.call(document.getElementsByClassName('container__questions'));
const anwsers = [].slice.call(document.getElementsByClassName('container__awnser'));

const cleanAnwsers = (element) => {
    anwsers.forEach((anwser) => {
        if(anwser.getAttribute('index')!== element.getAttribute('index')) {
            anwser.classList.remove('anwser__active');
        }
    });
    questions.forEach((question) => {
        if(question.getAttribute('index') !== element.getAttribute('index')) {
            question.childNodes[1].childNodes[1].classList.remove('button__active');
            question.classList.remove('button__active')
        }
    });
}

question.forEach((questio, index) => {
    questio.addEventListener('click', () => {
        cleanAnwsers(anwsers[index]);
        questions[index].childNodes[1].childNodes[1].classList.toggle('button__active');
        questio.classList.toggle('button__active');
        anwsers[index].classList.toggle('anwser__active');
    })
});



