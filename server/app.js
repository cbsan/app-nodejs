var Elevador = {
  andar: 0,
  subir() {
    this.andar++;
  },
  descer() {
    this.andar--;
  }
}

module.exports = Elevador;