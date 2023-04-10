let pacman = document.querySelector('.pacman');//OBTIENE LA POSICIÓN DEL PACMAN EN LA PAG
let body = document.querySelector('body');//OBTIENE EL CUERPO DE LA PAGINA
let laser = document.getElementById('laser');
let vidas = document.querySelector('i')
let vidasI = 5;
document.addEventListener('mousemove', (e) => {//CAPTURA DEL MOVIMIENTO Y QUE TOME EL SITIO DEL MOUSE
    pacman.style.left = (e.clientX - 40) + 'px';
})
//COMER MAIZ
//GENERAR DISPARO
document.addEventListener('click', () => {//CAPTURA CUANDO SE DE UN CLICK
    let bala = document.createElement('div');//SE CREA UN NUEVO ELEMENTO
    bala.classList.add('bala');//AGREGARMOS EL ELEMENTO BALA
    bala.style.bottom = 70 + 'px';//POSICIONAMOS DESDE DONDE SURGIRA
    bala.style.left = (pacman.getBoundingClientRect().left + 40) + 'px';//getBoundinClienteRect me da la información en tiempo real de algun elemento
    body.append(bala);//AGREGAMOS AL BOD
    laser.play();
})
//MOVIMIENTO DE BALA
setInterval(() => {//SE ENCARGA DE REALIZAR ALGUNA ACCION, POR UN TIEMPO DETERMINADO
    let balas = document.querySelectorAll('.bala');
    balas.forEach(bala => {
        bala.style.top = ((bala.getBoundingClientRect().top) - 20) + 'px';
        if (bala.getBoundingClientRect().top <= 0) {
            bala.remove();
        }
    });
}, 100);

//GENERAR MAZORCAS
let contador = 0;
setInterval(() => {
    contador++;
    let number = Math.floor(Math.random() * 3) + 1;
    if ((contador % 10) == 0) {
        let mazorca = document.createElement('div');
        mazorca.classList.add('mazorca' + number);
        body.append(mazorca);
        mazorca.style.left = (Math.random() * window.innerWidth - 100) + 'px';
    }
    let mazorcas = document.querySelectorAll('.mazorca' + number);
    mazorcas.forEach(element => {
        element.style.top = (element.getBoundingClientRect().top + 10) + 'px';
        if (element.getBoundingClientRect().top > pacman.getBoundingClientRect().top) {
            vidasI--;
            vidas.textContent=vidasI;
            element.remove();
        }
    });

}, 100);