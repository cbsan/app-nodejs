interface Pessoa {
  nome: string;
}

function Hi(pessoa: Pessoa) {
  return "Hi, "+pessoa.nome;
}

Hi({nome: "Jack"});
