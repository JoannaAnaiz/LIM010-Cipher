const ingresar = document.getElementById('ingresar');
const pagina1 = document.getElementById('pagina1');
const pagina2 = document.getElementById('pagina2');
const pagina3 = document.getElementById('pagina3');
const resultado = document.getElementById('resultado');
const cifrar = document.getElementById('cifrar');
const decifrar = document.getElementById('decifrar');
const password1 = document.getElementById('password1');


const password2 = 'LABORATORIA';
let nroIntentos = 0;

const confirmar = () => {
  if (password1.value === password2) {
    pagina1.classList.add('hide');
    pagina2.classList.replace('show');
    console.log('Lo Lograste')
  }
  else {
    if (nroIntentos < 2) {
      password1.value = ''
      nroIntentos++;
    } else {
      pagina1.classList.add('hide');
      pagina3.classList.replace('hide', 'show');
      console.log('Intentalo de nuevo');
    }

  }
}

ingresar.addEventListener('click', confirmar);

cifrar.addEventListener('click', () => {
  let mensajeacifrar = document.getElementById('entrada1').value;
  const desplazamiento = parseInt(document.getElementById('desplazamiento').value);
  const respuesta = window.cipher.encode(mensajeacifrar, desplazamiento);
  resultado.innerHTML = respuesta;
})

decifrar.addEventListener('click', () => {
    let mensajeadecifrar = document.getElementById('entrada1').value;
    const desplazamiento = parseInt(document.getElementById('desplazamiento').value);
    const respuesta = window.cipher.decode(mensajeadecifrar,desplazamiento);
        resultado.innerHTML = respuesta;
})









