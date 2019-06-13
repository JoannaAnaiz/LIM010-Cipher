const ingresar = document.getElementById('ingresar');
const pagina1 = document.getElementById('pagina1');
const pagina2 = document.getElementById('pagina2');

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

