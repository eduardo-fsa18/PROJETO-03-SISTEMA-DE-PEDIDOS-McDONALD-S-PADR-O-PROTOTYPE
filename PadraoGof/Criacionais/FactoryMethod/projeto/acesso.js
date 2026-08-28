//classe base acesso
class Pessoa{
    constructor (id){
        this.id = id;
    }
    mostrarDetalhes (){
        console.log(`ID do ${this.id}`);
    }
}
//subclasse da aluno
class Aluno extends Pessoa{
    constructor(id){
        super (id);
    }
}

class Professor extends Pessoa{
    constructor (id){
        super(id);

    }
}
class Visitantes extends Pessoa{
    constructor (id){
        super(id);

    }
}
class Administrativo extends Pessoa{
    constructor (id){
        super(id);
    }
}
class Terceiros extends Pessoa{
    constructor (id){
        super(id);
    }
}

// confirmar acesso abstrato da pessoa

class ConfirmarPessoa {
    confirmarAcesso(id){
        throw new Error (`Essa pessoa nao possui cadastro por tanto nao consegue acesso `);

    }
}
// confirmacao acesso concreto do aluno

class ConfirmarAluno extends ConfirmarPessoa{
    confirmarAcesso(id){
        return new Aluno (id);

    }
}
//confirmacao acesso concreto do professor 

class ConfirmarProfessor extends ConfirmarPessoa{
    confirmarAcesso(id){
        return new Professor (id);

    }
}
//confirmacao acesso concreto do visitante 

class ConfirmarVisitante extends ConfirmarPessoa{
    confirmarAcesso(id){
        return new Visitantes (id);

    }
}
class ConfirmarTerceiros extends ConfirmarPessoa{
    confirmarAcesso(id){
        return new Terceiros (id);
    }
}
class ConfirmarAdministrativo extends ConfirmarPessoa{
    confirmarAcesso(id){
        return new Administrativo (id);
    }
}
//uso padrao ..........

const confirmarAluno = new ConfirmarAluno();
const confirmarProfessor = new ConfirmarProfessor ();
const confirmarVisitante = new ConfirmarVisitante();
const confirmarTerceiros = new ConfirmarTerceiros();
const confirmarAdministrativo = new ConfirmarAdministrativo();

const pessoa1 = confirmarAluno.confirmarAcesso('Aluno: cleide');
const pessoa2 = confirmarAluno.confirmarAcesso('Aluno: joao');
const pessoa3 = confirmarProfessor.confirmarAcesso('Professor: rafael');
const pessoa4 = confirmarProfessor.confirmarAcesso('Professor: jacinto');
const pessoa5 = confirmarVisitante.confirmarAcesso('Visitante: juju');
const pessoa6 = confirmarVisitante.confirmarAcesso('Visitante: melissa');
const pessoa7 = confirmarTerceiros.confirmarAcesso('Terceiro: leo');
const pessoa8 = confirmarTerceiros.confirmarAcesso('Terceiro: geniel');
const pessoa9 = confirmarAdministrativo.confirmarAcesso('Administrativo: gabriel')
const pessoa10 = confirmarAdministrativo.confirmarAcesso('Administrativo: edu');

pessoa1.mostrarDetalhes();
pessoa2.mostrarDetalhes();
pessoa3.mostrarDetalhes();
pessoa4.mostrarDetalhes();
pessoa5.mostrarDetalhes();
pessoa6.mostrarDetalhes();
pessoa7.mostrarDetalhes();
pessoa8.mostrarDetalhes();
pessoa9.mostrarDetalhes();
pessoa10.mostrarDetalhes();
