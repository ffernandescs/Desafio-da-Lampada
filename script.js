const btnOn = document.querySelector('.on');
const btnOf = document.querySelector('.of');
const img = document.querySelector('img')

btnOn.addEventListener('click', () =>{
   
    img.src =  './img/on.jpg'
})

btnOf.addEventListener('click', () =>{
    lampOf();
    img.src =  './img/off.jpg'
})

img.addEventListener('mouseover',lampOn)
img.addEventListener('mouseleave',lampOf)
img.addEventListener('dblclick', lampQb)


function lampOn() {
    img.src =  './img/on.jpg'
}

function lampOf() {
    img.src =  './img/off.jpg'
}

function lampQb() {
    img.src =  './img/qb.jpg'
}