window.cipher = {
  encode: (entrada1,desplazamiento) => {
    let codificar = " ";
    for(let i=0; i<entrada1.length; i++){ 
      let ascii1 = entrada1.charCodeAt(i);
      if(ascii1>=32 && ascii1<=126){
        const fijo=((ascii1-32)+(parseInt(desplazamiento)))%95+32;
        codificar += String.fromCharCode(fijo);
       // }
      //  if(ascii1>=161 && ascii<=256){
            // const fijo = ((ascii-161)+(parseInt(desplazamiento)))%95+161;
        //  codificar += String.fromCharCode(fijo);
      //  }
       }
      } 
       return codificar;
    },
  // decode: (entrada1,desplazamiento) => {
  //   let decodificar = "";
  //   for (let i=0; i<entrada1.length; i++){ 
  //     let ascii2 = entrada1.charCodeAt(i);
  //     if(ascii2>=32 && ascii2<=126){
  //       const fijo = ((ascii2-32)+(parseInt(desplazamiento))%95+161)
  //       decodificar += String.fromCharCode(fijo);
  //       //}
        
  //       }
  //       return decodificar;
  //     }
}