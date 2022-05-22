const back = document.querySelector('#back');
const next = document.querySelector('#next');
const photos = ['images/01.jpeg', 'images/02.jpeg', 'images/03.jpeg', 'images/04.jpeg', 'images/05.jpeg'];

let i=0;

next.addEventListener('click', () => {
i++;
if (i > photos.length - 1) {
    i=0;
}
document.querySelector('#pictures').src = photos[i];
})

back.addEventListener('click', () => {
i--;
if (i < 0) {
    i = photos.length - 1;
}
document.querySelector('#pictures').src = photos[i];
})
