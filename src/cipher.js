window.cipher = {
  encode: (entrada1, desplazamiento) => {
    let codificar = '';
    for(let i = 0; i < entrada1.length; i++){
      let codAscii = entrada1.charCodeAt(i);
      if(codAscii >= 32 && codAscii <= 126){
        let code = (codAscii-32 + (parseInt(desplazamiento)))%95 + 32;
        codificar += String.fromCharCode(code);
      }else if(codAscii >= 160 && codAscii <= 255){
        let code = (codAscii-160 + desplazamiento)%96 + 160;
        codificar += String.fromCharCode(code);
      // }else if(codAscii >= 32 && codAscii <= 57){
      //   let code = ((codAscii-32 + desplazamiento)%26 + 32);
      //   codificar += String.fromCharCode(code);
      }
      
    }
    return codificar},

  decode: (entrada1, desplazamiento) => {
    let decodificar = '';
    
    for(let i = 0; i< entrada1.length; i++){
      let codAscii = entrada1.charCodeAt(i);
      if(codAscii >= 65 && codAscii <= 90){
        let code = (codAscii + 65 - desplazamiento)%26 + 65 ;
        decodificar += String.fromCharCode(code);
      }else if(codAscii >= 97 && codAscii <= 122){
        let code = (codAscii + 85 - desplazamiento)%26 + 97;
        decodificar += String.fromCharCode(code);
      }else if(codAscii >= 48 && codAscii <= 57){
        let code = (codAscii + 52 - desplazamiento)%10 + 48;
        decodificar += String.fromCharCode(code);
      }
    }
    return decodificar;
  }
}