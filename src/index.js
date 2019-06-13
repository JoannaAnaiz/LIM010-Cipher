const ingresar = document.getElementById('ingresar');
const pagina1 = document.getElementById('pagina1');
const pagina2 = document.getElementById('pagina2');
const pagina3 = document.getElementById('pagina3');
const entrada1 = document.getElementById('entrada1');
const resultado = document.getElementById('resultado');
const cifrar = document.getElementById('cifrar');
const descifrar = document.getElementById('descifrar');
const password1 = document.getElementById('password1');
const desplazamiento = document.getElementById('desplazamiento');


const password2 = 'LABORATORIA';
let nroIntentos = 0;

const confirmar = () =>{  
  if(password1.value === password2){
    pagina1.classList.add('hide');
    pagina2.classList.replace('hide','show');
    console.log ('Lo Lograste')
  }
  else{
      if(nroIntentos<2){
        password1.value = ''
        nroIntentos++;
      }else{
        pagina1.classList.add('hide');
        pagina3.classList.replace('hide','show');
        console.log('Intentalo de nuevo');
      }
     
      }
   }

ingresar.addEventListener('click',confirmar);

cifrar.addEventListener('click', () => {
    const respuesta = cipher.encode(entrada1.value,desplazamiento.value);
        resultado.value = respuesta;
})







