window.cipher = {
  encode: (entrada1,offsetNumber1) => {
    let codificar = "";
    for(let i=0; i<entrada1.length; i++){ 
      let ascii1 = entrada1.charCodeAt(i);
      //if(ascii1>=32 && ascii1<=126){
        codificar += String.fromCharCode((ascii1-32+offsetNumber1)%95+32);
       // }
      //  if(ascii1>=161 && ascii<=256){
         codificar += String.fromCharCode((ascii1-161+offsetNumber1)%95+161);
      //  }
       }
       return codificar;
    },
  decode: (entrada2,offsetNumber2) => {
    let decodificar = "";
    for (let i=0; i<entrada2.length; i++){ 
      let ascii2 = entrada2.charCodeAt(i);
      //if(ascii2>=32 && ascii2<=126){
        decodificar += String.fromCharCode((ascii2-offsetNumber2+32)%95+32);
        //}
        
        }
        return decodificar;
  }
};
