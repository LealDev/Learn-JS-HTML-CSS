class celular{
  constructor(){
    this.cor = "prata";
  }
  ligar(){
    let discando = "Uma ligação... \n";
    let ligando = "Ligando";
    return discando+ligando;
  }
}

 let objeto = new celular();
  console.log(objeto.ligar());