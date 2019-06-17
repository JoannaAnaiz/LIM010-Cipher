window.cipher = {
  encode: (entrada1, desplazamiento) => {
    let codificar = '';
    for(let i = 0; i < entrada1.length; i++){
      let codAscii = entrada1.charCodeAt(i);
      if(codAscii >= 65 && codAscii <= 90){
        let code = (codAscii - 65 + desplazamiento)%26 + 65 ;
        codificar += String.fromCharCode(code);
      }else if(codAscii >= 97 && codAscii <= 122){
        let code = (codAscii - 97 + desplazamiento)%26 + 97;
        codificar += String.fromCharCode(code);
      }else if(codAscii >= 48 && codAscii <= 57){
        let code = (codAscii - 48 + desplazamiento)%10 + 48;
        codificar += String.fromCharCode(code); 
      }else if(codAscii >= 32 && codAscii <=47){
        let code = (codAscii - 32 + desplazamiento)%16 + 32;
        codificar += String.fromCharCode(code);
      }else if(codAscii >= 58 && codAscii <=64){
        let code = (codAscii - 58 + desplazamiento)%7 + 58;
        codificar += String.fromCharCode(code);
         
      }
      
    }
    return codificar},

  decode: (entrada1, desplazamiento) => {
    let decodificar = '';
    for(let i = 0; i< entrada1.length; i++){
      let codAscii = entrada1.charCodeAt(i);
      if(codAscii >= 65 && codAscii <= 90){
        let code = 90 - (90 - codAscii  + desplazamiento)%26 ;
        decodificar += String.fromCharCode(code);
      }else if(codAscii >= 97 && codAscii <= 122){
        let code = 122 - (122 - codAscii + desplazamiento)%26;
        decodificar += String.fromCharCode(code);
      }else if(codAscii >= 48 && codAscii <= 57){
        let code = 57 - (57 - codAscii + desplazamiento)%10;
        decodificar += String.fromCharCode(code);
      }else if(codAscii >= 32 && codAscii <=47){
        let code = 47 - (47 - codAscii + desplazamiento)%16;
        decodificar += String.fromCharCode(code);
      }else if(codAscii >= 58 && codAscii <=64){
        let code = 64 - (64 - codAscii + desplazamiento)%7;
        decodificar += String.fromCharCode(code);
      }
    }
    return decodificar;
  }
}