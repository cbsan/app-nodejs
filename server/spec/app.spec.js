var Elevador = require('../app');
describe("Elevador", function(){

  it('deve estar no andar 0', function() {
    expect(Elevador.andar).toBe(0);
  });

  it('deve estar no andar 1', function() {
    Elevador.subir();
    expect(Elevador.andar).toBe(1);
  });

  it('deve voltar no andar 0', function() {
    Elevador.descer();
    expect(Elevador.andar).toBe(3);
  });
});