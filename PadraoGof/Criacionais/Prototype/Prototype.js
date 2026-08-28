class Pessoa {
    constructor(id, nome, idade){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }

    clone(){
        return new Pessoa(this.id, this.nome, this.idade);
    }
}

class GerenciaPessoa {
    constructor (){
        this.pessoas = {};
    }

    addPessoas(id, nome, idade){
        const pessoa = new Pessoa(id, nome, idade);
        this.pessoas[id] = pessoa;
    }

    // Corrigido: Retorna o clone se ele existir
    getPessoaCloneById(id){
        const pessoaOriginal = this.pessoas[id];
        if(pessoaOriginal){
            return pessoaOriginal.clone(); // Usa o método clone aqui
        }
        return null;
    }

    // Opcional: Mantém um método para pegar a original se precisar
    getPessoaOriginalById(id){
        return this.pessoas[id] || null;
    }
}

const gerencia = new GerenciaPessoa();

gerencia.addPessoas(1, 'joao da sila', 30);
gerencia.addPessoas(2, 'Joana', 25);
gerencia.addPessoas(3, 'Kleber bambam', 35);

// Agora sim, pegando clones reais
const pessoaClone1 = gerencia.getPessoaCloneById(1);
const pessoaClone2 = gerencia.getPessoaCloneById(2);
const pessoaClone3 = gerencia.getPessoaCloneById(3);

if(pessoaClone1){
    pessoaClone1.nome = "clonado de oliveira";
}
if (pessoaClone3){
    pessoaClone3.nome = "Bruno de oliveira clonado";
    pessoaClone3.idade = 99; // Corrigido para número
}

console.log("--- Pessoas Originais (Intactas) ---");
console.log(gerencia.getPessoaOriginalById(1));
console.log(gerencia.getPessoaOriginalById(3));

console.log("\n--- Pessoas Clonadas (Modificadas) ---");
console.log(pessoaClone1);
console.log(pessoaClone3);
