let pacman = document.querySelector('.pacman');//OBTIENE LA POSICIÓN DEL PACMAN EN LA PAG
let body = document.querySelector('body');//OBTIENE EL CUERPO DE LA PAGINA
let laser = document.getElementById('audio_laser');
let pop = document.getElementById('audio_explosion');
let vidas = document.querySelector('i');
let time = document.getElementById('time');
let points = document.getElementById('points');
let vidasI = 5;
let timesecI = 60;
let pointsI = 0;

setInterval(() => {
    timesecI--;
    time.textContent = timesecI;
    points.textContent = 'PUNTOS: ' + pointsI;
    if (timesecI == 0) {
        alert('GANASTE!!!\nPUNTAJE:' + pointsI);
        update();
    }
}, 1000)

document.addEventListener('mousemove', (e) => {//CAPTURA DEL MOVIMIENTO Y QUE TOME EL SITIO DEL MOUSE
    pacman.style.left = (e.clientX - 40) + 'px';
})
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

        let mazorcas1 = document.querySelectorAll('.mazorca' + 1);
        let mazorcas2 = document.querySelectorAll('.mazorca' + 2);
        let mazorcas3 = document.querySelectorAll('.mazorca' + 3);
        mazorcas1 = Array.prototype.slice.call(mazorcas1);
        mazorcas2 = Array.prototype.slice.call(mazorcas2);
        mazorcas3 = Array.prototype.slice.call(mazorcas3);

        let mazorcas = mazorcas1.concat(mazorcas2.concat(mazorcas3));//PUEDE QUE TRUENE
        mazorcas.forEach(element => {
            if (bala.getBoundingClientRect().top <= element.getBoundingClientRect().top + 50) {
                if (bala.getBoundingClientRect().left >= element.getBoundingClientRect().left
                    && bala.getBoundingClientRect().left <= element.getBoundingClientRect().left + 80) {
                    element.style.backgroudImage = 'url("../IMG/PALOMITA.png")';
                    pop.play();
                    setTimeout(() => {
                        element.remove();
                        if (element.classList.contains("mazorca1")) {
                            pointsI += 20;
                        } else if (element.classList.contains("mazorca2")) {
                            pointsI += 5;
                        } else if (element.classList.contains("mazorca3")) {
                            pointsI += 10;
                        }
                    }, 100);
                }
            }
        });

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
            vidas.textContent = vidasI;
            element.remove();
            if (vidasI == 0) {
                alert('OH! PERDISTE TODAS TUS VIDAS :C\nPUNTAJE:' + pointsI);
                update();
                window.location.href = "http://localhost/connection/PRACTICA 1/Programa/HTML/Login.php";
            }
        }
    });

}, 100);

function update() {

    const pointsChange = {
        bpoints: pointsI
    };

    fetch('http://localhost/connection/PRACTICA%201/Programa/HTML/Actualizar.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pointsChange)
    })
        .then(response => response.text())
        .then(result => {
            // Process the response from the PHP file
            console.log(""+result);
        })
        .catch(error => console.error('Error:', error));

}